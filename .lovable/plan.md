

# AccountancyAI - Real AI Integration Plan

## Overview
Is plan mein hum app ko real AI capabilities se connect karenge:
- **Tesseract.js** se uploaded images mein se text extract karenge (OCR)
- **Lovable AI (Gemini)** se extracted text ya typed question ka step-by-step accountancy answer generate karenge

---

## Architecture Flow

```text
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                           │
│  ┌──────────────────┐    ┌──────────────────────────────────┐  │
│  │  Type Question   │ OR │  Upload Image (JPG/PNG/PDF)      │  │
│  └────────┬─────────┘    └─────────────┬────────────────────┘  │
│           │                            │                        │
│           │                  ┌─────────▼─────────┐              │
│           │                  │   Tesseract.js    │              │
│           │                  │   (OCR in Browser)│              │
│           │                  └─────────┬─────────┘              │
│           │                            │                        │
│           └────────────┬───────────────┘                        │
│                        │                                        │
│              ┌─────────▼─────────┐                              │
│              │  Extracted Text   │                              │
│              └─────────┬─────────┘                              │
└────────────────────────┼────────────────────────────────────────┘
                         │
           ┌─────────────▼─────────────┐
           │   Backend Edge Function   │
           │   (solve-question)        │
           │                           │
           │  - Receives question text │
           │  - Calls Lovable AI       │
           │    (Gemini 3 Flash)       │
           │  - Returns structured     │
           │    accountancy answer     │
           └─────────────┬─────────────┘
                         │
           ┌─────────────▼─────────────┐
           │   Step-by-Step Solution   │
           │  - Journal Entries        │
           │  - Ledger Postings        │
           │  - Trial Balance          │
           │  - Calculations           │
           │  - Final Answer           │
           └───────────────────────────┘
```

---

## Implementation Steps

### Step 1: Install Tesseract.js Package
NPM package install karenge jo browser mein OCR perform karega.

**File:** `package.json`
- Add dependency: `tesseract.js` (version ^5.0.0)

---

### Step 2: Create Backend Edge Function for AI
Ye function Lovable AI (Gemini) ko call karega aur accountancy answer generate karega.

**File:** `supabase/functions/solve-question/index.ts`

**Function Logic:**
1. Question text receive karega
2. CBSE Accountancy teacher ke role mein Lovable AI ko call karega
3. Structured response return karega with:
   - Journal Entries
   - Ledger Postings
   - Trial Balance
   - Calculations
   - Final Answer

**System Prompt:**
```
You are a CBSE Class 11 & 12 Accountancy expert teacher. 
Generate step-by-step solutions in this exact format:

Step 1: Journal Entry - Show proper journal entry format
Step 2: Ledger Posting - Show T-accounts for all accounts
Step 3: Trial Balance - Extract trial balance if applicable
Step 4: Calculations - Show any calculations needed
Final Answer: Concise conclusion

Use Indian Rupee (₹) symbol. Follow CBSE syllabus conventions.
```

---

### Step 3: Update config.toml
Edge function configuration add karenge.

**File:** `supabase/config.toml`
```toml
project_id = "ilxyrjighvsjseksenft"

[functions.solve-question]
verify_jwt = false
```

---

### Step 4: Create OCR Service Hook
Tesseract.js ko use karne ke liye custom hook banayenge.

**File:** `src/hooks/useOCR.ts`

**Features:**
- Image file ko input lega
- Tesseract.js se text extract karega
- Loading state manage karega
- Progress percentage show karega (OCR mein time lagta hai)
- Error handling

---

### Step 5: Update AskQuestion Page
Main page ko update karenge with real AI integration.

**File:** `src/pages/AskQuestion.tsx`

**Changes:**
1. Import Tesseract.js aur OCR hook
2. `handleFileUpload` function update:
   - Image upload hone par Tesseract.js se OCR start
   - OCR progress show karna
   - Extracted text ko question field mein display
3. `handleSubmit` function update:
   - Remove hardcoded `generateSolution`
   - Call backend edge function
   - Parse AI response into steps
4. Add OCR loading state with progress indicator
5. Better error handling for both OCR and AI failures

---

## Technical Details

### Tesseract.js Usage (Client-side)
```typescript
import Tesseract from 'tesseract.js';

const { data: { text } } = await Tesseract.recognize(
  imageFile,
  'eng+hin', // English + Hindi support
  {
    logger: (m) => {
      if (m.status === 'recognizing text') {
        setProgress(Math.round(m.progress * 100));
      }
    }
  }
);
```

### Edge Function AI Call
```typescript
const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "google/gemini-3-flash-preview",
    messages: [
      { role: "system", content: ACCOUNTANCY_SYSTEM_PROMPT },
      { role: "user", content: questionText }
    ]
  })
});
```

---

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `package.json` | Modify | Add tesseract.js dependency |
| `supabase/config.toml` | Modify | Add solve-question function config |
| `supabase/functions/solve-question/index.ts` | Create | AI edge function |
| `src/hooks/useOCR.ts` | Create | OCR helper hook |
| `src/pages/AskQuestion.tsx` | Modify | Integrate OCR + AI |

---

## User Experience Flow

1. **Text Question:** User types question → Click "Get Solution" → AI generates answer
2. **Image Question:** User uploads image → OCR extracts text (progress bar shown) → Text appears in textarea → User clicks "Get Solution" → AI generates answer

---

## Important Notes

- **Tesseract.js** browser mein run hota hai, koi API key nahi chahiye
- **Lovable AI** already configured hai with `LOVABLE_API_KEY` secret
- OCR mein 5-15 seconds lag sakte hain image size ke according
- Hindi + English dono languages support hongi OCR mein

