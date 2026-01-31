

# Ask Question Page - ChatGPT/Gemini Style UI Redesign

## Overview
Current UI ko transform karenge ek modern chat interface mein jaise ChatGPT aur Gemini ka UI hota hai - centered input box at bottom, conversation-style messages, aur clean minimal design.

---

## Current State vs Target State

### Current UI Issues:
- Form-based layout with card wrapper
- Input field at top of page
- Traditional form submit pattern
- Solution display in separate cards below

### Target UI (ChatGPT/Gemini Style):
- Clean, minimal centered layout
- Input bar fixed at bottom of screen
- Chat bubble style messages
- User question on right, AI response on left
- Smooth typing animations
- Avatar icons for user and AI
- Collapsible step-by-step sections

---

## Visual Design Plan

```text
┌────────────────────────────────────────────────────────────────┐
│                     AccountancyAI (Header)                      │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│                    Empty State / Welcome                         │
│                    "Ask any Accountancy                          │
│                     Question"                                    │
│                                                                  │
│              [Example question chips to click]                   │
│                                                                  │
├────────────────────────────────────────────────────────────────┤
│              OR (After conversation starts)                      │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│                              ┌─────────────────────────────┐    │
│                              │ User's question bubble  👤  │    │
│                              └─────────────────────────────┘    │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  🤖 AI Response with collapsible steps                   │    │
│  │                                                          │    │
│  │  ▼ Step 1: Journal Entry                                 │    │
│  │  ▼ Step 2: Ledger Posting                                │    │
│  │  ▼ Step 3: Trial Balance                                 │    │
│  │  ✓ Final Answer: ...                                     │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
├────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 📎 [Type your accountancy question...]        [↑ Send]   │   │
│  └──────────────────────────────────────────────────────────┘   │
│              ⬆️ Image    Progress bar (if OCR running)          │
└────────────────────────────────────────────────────────────────┘
```

---

## Implementation Steps

### Step 1: Create ChatMessage Component
Naya component banayenge jo messages ko bubble style mein display karega.

**File:** `src/components/ChatMessage.tsx`

**Features:**
- User message bubble (right aligned, primary color)
- AI message bubble (left aligned, with avatar)
- Support for markdown rendering in AI responses
- Collapsible accordion for steps
- Copy button on AI responses
- Timestamp display

---

### Step 2: Create ChatInput Component
Bottom-fixed input component banayenge.

**File:** `src/components/ChatInput.tsx`

**Features:**
- Rounded input box with send button
- Attach image button on left side
- Auto-resize textarea (grows with content)
- Send on Enter, Shift+Enter for new line
- Disabled state during loading
- OCR progress indicator overlay
- Beautiful focus states and animations

---

### Step 3: Create EmptyState Component
Welcome screen jab koi conversation nahi hai.

**File:** `src/components/EmptyState.tsx`

**Features:**
- Centered welcome message
- App logo with gradient
- "What can I help you with?" heading
- Example question chips that user can click
- Subtle animations

---

### Step 4: Create TypingIndicator Component
Loading animation jab AI thinking kar raha hai.

**File:** `src/components/TypingIndicator.tsx`

**Features:**
- Three bouncing dots animation
- "AI is thinking..." text
- Matches AI avatar style

---

### Step 5: Update StepDisplay for Accordion Style
Existing StepDisplay ko collapsible accordion style mein update karenge.

**File:** `src/components/StepDisplay.tsx`

**Changes:**
- Replace cards with accordion items
- Add collapse/expand animations
- More compact design
- Better integration with chat bubbles

---

### Step 6: Redesign AskQuestion Page
Main page ko completely redesign karenge.

**File:** `src/pages/AskQuestion.tsx`

**Changes:**
1. Remove card-based layout
2. Add flex column layout with:
   - Scrollable message area (middle)
   - Fixed input bar (bottom)
3. Implement conversation state (array of messages)
4. Each message has: type (user/ai), content, timestamp
5. Empty state when no messages
6. Auto-scroll to bottom on new messages
7. Keyboard shortcuts (Enter to send)
8. Ad banner positioned non-intrusively

---

### Step 7: Add New CSS Animations
Smooth transitions aur animations add karenge.

**File:** `src/index.css`

**New Animations:**
- Message fade-in slide-up
- Typing dots bounce
- Smooth scroll behavior
- Input focus glow

---

## Technical Details

### Conversation State Structure:
```typescript
interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  steps?: SolutionStep[]; // For AI messages
  finalAnswer?: string;   // For AI messages
  isLoading?: boolean;    // For AI thinking state
}

const [messages, setMessages] = useState<Message[]>([]);
```

### Auto-scroll Implementation:
```typescript
const messagesEndRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);
```

### Auto-resize Textarea:
```typescript
const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  e.target.style.height = 'auto';
  e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
};
```

---

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/ChatMessage.tsx` | Create | Message bubble component |
| `src/components/ChatInput.tsx` | Create | Bottom input bar component |
| `src/components/EmptyState.tsx` | Create | Welcome/empty state |
| `src/components/TypingIndicator.tsx` | Create | AI thinking animation |
| `src/components/StepDisplay.tsx` | Modify | Convert to accordion style |
| `src/pages/AskQuestion.tsx` | Modify | Complete redesign |
| `src/index.css` | Modify | Add new animations |
| `tailwind.config.ts` | Modify | Add new keyframes |

---

## Example Questions (for Empty State chips)

1. "Prepare journal entries for purchase of machinery"
2. "Explain depreciation methods with examples"
3. "Trial balance from given ledger accounts"
4. "Bank reconciliation statement"
5. "Rectification of errors in trial balance"

---

## Key UI Elements

### 1. Message Bubbles
- User: Right aligned, primary color background, rounded corners
- AI: Left aligned, card background, avatar on left

### 2. Input Bar
- Full width with max-width
- Rounded pill shape
- Paperclip icon for image upload
- Send arrow button
- Subtle shadow and border

### 3. Accordion Steps
- Expandable/collapsible sections
- Number badges for each step
- Final answer highlighted with checkmark

### 4. Loading State
- Typing indicator with bouncing dots
- "Generating solution..." text
- Skeleton placeholder for content

---

## Animations to Add

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-dots {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-6px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.4); }
  50% { box-shadow: 0 0 0 8px hsl(var(--primary) / 0); }
}
```

---

## Mobile Responsiveness

- Input bar adapts to full width on mobile
- Message bubbles use max-width: 90% on mobile
- Smaller padding and margins
- Touch-friendly button sizes
- Keyboard-aware layout (input stays visible)

