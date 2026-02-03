import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ACCOUNTANCY_SYSTEM_PROMPT = `You are a CBSE Class 11 & 12 Accountancy expert teacher.

RESPONSE STYLE:
- Keep answers SHORT but DETAILED and to the point
- DO NOT use asterisks (*) or any markdown formatting like **bold** or *italic*
- Use plain text only - clean and neat formatting
- Use line breaks and spacing for readability
- Use simple dashes (-) for bullet points if needed

RESPONSE FORMAT RULES:
1. For GENERAL QUESTIONS (theory, concepts, definitions):
   - Give a clear, concise answer in plain text
   - Use simple bullet points with dashes if helpful
   - Just answer the question directly and briefly

2. ONLY use the structured format when user EXPLICITLY asks for:
   - Journal Entry / Pass journal entry
   - Ledger / Ledger Account / Post to ledger
   - Trial Balance / Trading Account / P&L Account / Balance Sheet
   - Any specific account preparation

When structured format IS needed, use this clean format:

Step 1: Journal Entry
[Show journal entry with Date, Particulars, L.F., Debit Rs., Credit Rs.]

Step 2: Ledger Posting
[Show T-accounts with Dr. and Cr. sides]

Step 3: Trial Balance
[If applicable, otherwise write "Not applicable"]

Step 4: Calculations
[If needed, otherwise write "No additional calculations"]

Final Answer:
[Brief conclusion]

RULES:
- Use Rs. or Rupees symbol
- Follow CBSE syllabus
- Keep it short, neat, and professional
- NO asterisks or special formatting marks`;

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string") {
      return new Response(
        JSON.stringify({ error: "Question is required" }),
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

    console.log("Processing question:", question.substring(0, 100) + "...");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: ACCOUNTANCY_SYSTEM_PROMPT },
          { role: "user", content: question }
        ],
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
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content;

    if (!aiResponse) {
      console.error("Empty AI response:", data);
      return new Response(
        JSON.stringify({ error: "No response from AI" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("AI response generated successfully");

    return new Response(
      JSON.stringify({ solution: aiResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("solve-question error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
