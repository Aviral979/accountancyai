import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 15; // max requests per window
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}, 10 * 60 * 1000);

// Magic number validation for common image formats
const IMAGE_MAGIC_NUMBERS: Record<string, string[]> = {
  jpeg: ["/9j/"],       // JPEG starts with FF D8 FF -> base64 /9j/
  jpg: ["/9j/"],
  png: ["iVBOR"],       // PNG starts with 89 50 4E 47 -> base64 iVBOR
  gif: ["R0lG"],        // GIF starts with 47 49 46 -> base64 R0lG
  webp: ["UklGR"],      // RIFF header -> base64 UklGR
  bmp: ["Qk"],          // BM header -> base64 Qk
};

function validateMagicNumber(base64Data: string, declaredFormat: string): boolean {
  // Extract just the base64 content after the data URI prefix
  const base64Content = base64Data.split(",")[1];
  if (!base64Content) return false;
  
  const expectedPrefixes = IMAGE_MAGIC_NUMBERS[declaredFormat.toLowerCase()];
  if (!expectedPrefixes) return false;
  
  return expectedPrefixes.some(prefix => base64Content.startsWith(prefix));
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
                     req.headers.get("cf-connecting-ip") ||
                     "unknown";
    if (isRateLimited(clientIp)) {
      console.warn("Rate limit exceeded for IP:", clientIp.substring(0, 8) + "...");
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { imageBase64 } = await req.json();

    if (!imageBase64 || typeof imageBase64 !== "string") {
      return new Response(
        JSON.stringify({ error: "Image data is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate image size (max ~3.5MB base64 = ~2.6MB file)
    if (imageBase64.length > 5_000_000) {
      return new Response(
        JSON.stringify({ error: "Image too large (max 3MB)" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate base64 image format
    const formatMatch = imageBase64.match(/^data:image\/(jpeg|jpg|png|webp|gif|bmp);base64,/);
    if (!formatMatch) {
      return new Response(
        JSON.stringify({ error: "Invalid image format. Supported: JPEG, PNG, WebP" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate magic number matches declared format
    const declaredFormat = formatMatch[1];
    if (!validateMagicNumber(imageBase64, declaredFormat)) {
      return new Response(
        JSON.stringify({ error: "Image content does not match declared format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Processing image for text extraction...");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Extract ALL text from this image exactly as written. This is likely an accountancy question from CBSE Class 11 or 12.

RULES:
- Extract every word, number, and symbol exactly
- Preserve the structure (tables, columns, rows)
- Include all amounts with Rs. symbol
- Keep Hindi text if present
- Do not add any explanation, just extract the text
- If it's a table, maintain the table structure using spaces

Extract the complete text now:`
              },
              {
                type: "image_url",
                image_url: {
                  url: imageBase64.startsWith("data:") ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`
                }
              }
            ]
          }
        ],
      }),
    });

    if (!response.ok) {
      console.error("AI gateway error:", response.status);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to extract text" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const extractedText = data.choices?.[0]?.message?.content || "";

    console.log("Text extracted successfully, length:", extractedText.length);

    return new Response(
      JSON.stringify({ text: extractedText }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("extract-text error:", error instanceof Error ? error.message : "Unknown error");
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
