import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Simple in-memory rate limiter (per IP, resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20; // max requests per window
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

// Cleanup old entries periodically to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}, 10 * 60 * 1000); // every 10 minutes

const ACCOUNTANCY_SYSTEM_PROMPT = `You are a CBSE Class 11 & 12 Accountancy expert. Give FAST, CLEAR answers.

RULES:
- NO asterisks or markdown - plain text only
- Keep answers SHORT and DIRECT
- Simple calculations - show formula then answer

=== CALCULATIONS - SIMPLE FORMAT ===
Formula: [write formula]
= [step 1]
= [step 2]  
= Answer: Rs. XXXXX

Example:
Depreciation = Cost x Rate x Time
= 50,000 x 10% x 1
= Rs. 5,000

=== JOURNAL ENTRY ===
[Account] A/c                    Dr.     [Amount]
    To [Account] A/c                      [Amount]
(Narration)

=== LEDGER (T-Account) ===
Dr.           [Account Name]           Cr.
--------------------------------------------
Date | Particulars | Amt | Date | Particulars | Amt
--------------------------------------------

=== TRIAL BALANCE ===
Trial Balance as at [Date]
--------------------------------------------
Account Name          | Debit    | Credit
--------------------------------------------
[Name]               | XXXXX    |
[Name]               |          | XXXXX
--------------------------------------------
Total                | XXXXX    | XXXXX

=== TRADING & P/L ACCOUNT ===
Trading & P/L A/c for year ended [Date]
--------------------------------------------
Dr. Side             | Amt  | Cr. Side        | Amt
--------------------------------------------
To Opening Stock     |      | By Sales        |
To Purchases         |      | By Closing Stock|
To Gross Profit c/d  |      |                 |
--------------------------------------------
To Expenses          |      | By Gross Profit |
To Net Profit        |      |                 |
--------------------------------------------

=== BALANCE SHEET ===
Balance Sheet as at [Date]
--------------------------------------------
Liabilities    | Amt  | Assets         | Amt
--------------------------------------------
Capital        |      | Fixed Assets   |
Loans          |      | Current Assets |
Creditors      |      | Cash/Bank      |
--------------------------------------------
Total          | XXXXX| Total          | XXXXX

=== BANK RECONCILIATION ===
BRS as at [Date]
--------------------------------------------
Balance as per Cash Book          | XXXXX
Add: Cheques issued not presented | XXXXX
Less: Cheques deposited not cleared| XXXXX
--------------------------------------------
Balance as per Pass Book          | XXXXX

Keep it simple and neat!`;

serve(async (req) => {
  // Handle CORS preflight
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

    const { question } = await req.json();

    if (!question || typeof question !== "string") {
      return new Response(
        JSON.stringify({ error: "Question is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate question length
    if (question.trim().length < 5) {
      return new Response(
        JSON.stringify({ error: "Question too short (min 5 characters)" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (question.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Question too long (max 5000 characters)" }),
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

    console.log("Processing question, length:", question.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "system", content: ACCOUNTANCY_SYSTEM_PROMPT },
          { role: "user", content: question }
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service credits exhausted. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      console.error("AI gateway error:", response.status);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response started");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("solve-question error:", error instanceof Error ? error.message : "Unknown error");
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
