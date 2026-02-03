import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ACCOUNTANCY_SYSTEM_PROMPT = `You are a CBSE Class 11 & 12 Accountancy expert teacher.

RESPONSE FORMAT RULES:
1. For GENERAL QUESTIONS (theory, concepts, definitions, explanations):
   - Give a clear, concise answer in plain text
   - Use bullet points or numbered lists if helpful
   - No need for journal entries, ledgers, or structured steps
   - Just answer the question directly

2. ONLY use the structured format when the user EXPLICITLY asks for:
   - Journal Entry / Journal / Pass journal entry
   - Ledger / Ledger Account / Post to ledger
   - Trial Balance
   - Trading Account / Profit & Loss Account / Balance Sheet
   - Any specific account preparation (Cash Book, Bank Reconciliation, etc.)
   - Prepare accounts / Show accounts

When structured format IS needed, use this format:
**Step 1: Journal Entry**
[Show proper journal entry format with Date, Particulars, L.F., Debit (₹), Credit (₹) columns]

**Step 2: Ledger Posting**
[Show T-accounts for all accounts involved with proper Dr. and Cr. sides]

**Step 3: Trial Balance**
[Extract trial balance if applicable, or write "Not applicable for this transaction"]

**Step 4: Calculations**
[Show any calculations needed, or write "No additional calculations required"]

**Final Answer:**
[Concise conclusion summarizing the solution]

IMPORTANT RULES:
- Always use Indian Rupee (₹) symbol
- Follow CBSE syllabus conventions strictly
- Be accurate and helpful
- Match response style to what the user is asking for`;

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
