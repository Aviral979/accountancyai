import { Quiz } from "./quizzes";

export const class11Quizzes: Quiz[] = [
  {
    id: "quiz-11-1",
    chapterId: "11-1",
    title: "Introduction to Accounting",
    questions: [
      {
        id: "q1",
        question: "What is the primary objective of accounting?",
        options: ["To maintain systematic records of business transactions", "To calculate taxes", "To pay salaries", "To purchase goods"],
        correctAnswer: 0,
        explanation: "The primary objective of accounting is to maintain systematic records of business transactions.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Which of the following is NOT a branch of accounting?",
        options: ["Financial Accounting", "Cost Accounting", "Management Accounting", "Social Accounting"],
        correctAnswer: 3,
        explanation: "Social Accounting is not a main branch. The main branches are Financial, Cost, and Management Accounting.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Who is called the 'Father of Accounting'?",
        options: ["Adam Smith", "Luca Pacioli", "Charles Babbage", "J.M. Keynes"],
        correctAnswer: 1,
        explanation: "Luca Pacioli is known as the Father of Accounting for documenting the double-entry bookkeeping system.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "Which characteristic of accounting information means it should be free from bias?",
        options: ["Relevance", "Reliability", "Neutrality", "Comparability"],
        correctAnswer: 2,
        explanation: "Neutrality means accounting information should be free from bias and present a fair view.",
        difficulty: "hard"
      },
      {
        id: "q5",
        question: "Accounting provides information to:",
        options: ["Only owners", "Only government", "Only creditors", "All stakeholders"],
        correctAnswer: 3,
        explanation: "Accounting provides useful financial information to all stakeholders including owners, creditors, government, and employees.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-11-2",
    chapterId: "11-2",
    title: "Basic Accounting Terms",
    questions: [
      {
        id: "q1",
        question: "A business transaction must involve:",
        options: ["Only cash", "Exchange of value in monetary terms", "Only credit", "Only goods"],
        correctAnswer: 1,
        explanation: "A business transaction involves exchange of value that can be measured in monetary terms.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Debtors are persons who:",
        options: ["We owe money to", "Owe money to us", "Supply goods to us", "Work for us"],
        correctAnswer: 1,
        explanation: "Debtors are persons or entities who owe money to the business for goods sold on credit.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Capital is a:",
        options: ["Asset of the business", "Liability of the business", "Expense of the business", "Income of the business"],
        correctAnswer: 1,
        explanation: "Capital is a liability of the business towards its owner as per the entity concept.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Revenue expenditure is:",
        options: ["Spent on acquiring fixed assets", "Benefit limited to current period", "Spent on expansion", "Always a large amount"],
        correctAnswer: 1,
        explanation: "Revenue expenditure benefits only the current accounting period, like rent, salaries, etc.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Goods withdrawn by owner for personal use is called:",
        options: ["Purchase", "Sales", "Drawings", "Capital"],
        correctAnswer: 2,
        explanation: "When the owner withdraws goods or cash for personal use, it is called Drawings.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-3",
    chapterId: "11-3",
    title: "Theory Base of Accounting, Accounting Standards and Ind-AS",
    questions: [
      {
        id: "q1",
        question: "Going Concern concept assumes that:",
        options: ["Business will be liquidated soon", "Business will continue indefinitely", "Business has limited life", "Business will make profits"],
        correctAnswer: 1,
        explanation: "The Going Concern concept assumes the business will continue its operations indefinitely.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "GAAP stands for:",
        options: ["Generally Accepted Accounting Practices", "Generally Accepted Accounting Principles", "Generally Applied Accounting Principles", "Globally Accepted Accounting Principles"],
        correctAnswer: 1,
        explanation: "GAAP stands for Generally Accepted Accounting Principles.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Which concept requires recording transactions at actual cost?",
        options: ["Money Measurement Concept", "Cost Concept", "Realization Concept", "Matching Concept"],
        correctAnswer: 1,
        explanation: "The Cost Concept requires that assets be recorded at their historical cost.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Ind-AS are converged with:",
        options: ["US GAAP", "IFRS", "UK GAAP", "Japanese Standards"],
        correctAnswer: 1,
        explanation: "Indian Accounting Standards (Ind-AS) are converged with International Financial Reporting Standards (IFRS).",
        difficulty: "hard"
      },
      {
        id: "q5",
        question: "Conservatism concept means:",
        options: ["Record all profits", "Anticipate losses but not profits", "Ignore losses", "Record only cash transactions"],
        correctAnswer: 1,
        explanation: "Conservatism concept says anticipate no profit but provide for all possible losses.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-11-4",
    chapterId: "11-4",
    title: "Bases of Accounting",
    questions: [
      {
        id: "q1",
        question: "Under cash basis, revenue is recorded when:",
        options: ["Goods are sold", "Cash is received", "Order is placed", "Invoice is sent"],
        correctAnswer: 1,
        explanation: "Under cash basis, revenue is recorded only when cash is actually received.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Accrual basis records expenses when:",
        options: ["Cash is paid", "They are incurred", "Bill is received", "Next year"],
        correctAnswer: 1,
        explanation: "Under accrual basis, expenses are recorded when they are incurred, regardless of payment.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Which basis of accounting is more scientific?",
        options: ["Cash basis", "Accrual basis", "Mixed basis", "None"],
        correctAnswer: 1,
        explanation: "Accrual basis is considered more scientific as it matches income with expenses of the same period.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Outstanding expenses are recorded under:",
        options: ["Cash basis", "Accrual basis", "Both", "Neither"],
        correctAnswer: 1,
        explanation: "Outstanding expenses are recognized only under accrual basis as cash has not been paid yet.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Government accounting generally follows:",
        options: ["Accrual basis", "Cash basis", "Mixed basis", "No specific basis"],
        correctAnswer: 1,
        explanation: "Government accounting in India traditionally follows the cash basis of accounting.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-5",
    chapterId: "11-5",
    title: "Accounting Equation",
    questions: [
      {
        id: "q1",
        question: "The accounting equation is:",
        options: ["Assets = Capital + Liabilities", "Assets = Capital - Liabilities", "Assets + Capital = Liabilities", "Assets - Capital = Liabilities"],
        correctAnswer: 0,
        explanation: "The fundamental accounting equation is Assets = Capital + Liabilities.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "If capital is Rs. 50,000 and liabilities are Rs. 30,000, assets are:",
        options: ["Rs. 20,000", "Rs. 50,000", "Rs. 80,000", "Rs. 30,000"],
        correctAnswer: 2,
        explanation: "Assets = Capital + Liabilities = 50,000 + 30,000 = Rs. 80,000.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Purchase of goods on credit will:",
        options: ["Increase assets and increase liabilities", "Decrease assets and decrease liabilities", "Increase assets only", "Decrease liabilities only"],
        correctAnswer: 0,
        explanation: "Credit purchase increases Stock (asset) and increases Creditors (liability).",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Payment of salary will:",
        options: ["Decrease assets and decrease capital", "Increase assets", "Increase liabilities", "No effect on equation"],
        correctAnswer: 0,
        explanation: "Salary payment decreases Cash (asset) and decreases Capital (as expense reduces profit).",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Owner withdraws Rs. 5,000 cash. Effect on equation:",
        options: ["Assets decrease, Capital decrease", "Assets decrease, Liabilities decrease", "No change", "Assets increase"],
        correctAnswer: 0,
        explanation: "Drawings decrease Cash (asset) and decrease Capital by the same amount.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-6",
    chapterId: "11-6",
    title: "Accounting Procedures – Rules of Debit and Credit",
    questions: [
      {
        id: "q1",
        question: "The rule 'Debit the receiver, Credit the giver' applies to:",
        options: ["Personal accounts", "Real accounts", "Nominal accounts", "All accounts"],
        correctAnswer: 0,
        explanation: "This golden rule applies to Personal accounts which represent persons or organizations.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "'Debit what comes in, Credit what goes out' is for:",
        options: ["Personal accounts", "Real accounts", "Nominal accounts", "All accounts"],
        correctAnswer: 1,
        explanation: "This rule applies to Real accounts which represent assets of the business.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "In modern approach, increase in expense is:",
        options: ["Credited", "Debited", "Not recorded", "Depends on amount"],
        correctAnswer: 1,
        explanation: "In the modern approach, all expenses and losses are debited when they increase.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Machinery account is a:",
        options: ["Personal account", "Real account", "Nominal account", "Fictitious account"],
        correctAnswer: 1,
        explanation: "Machinery is a tangible asset, so it is a Real account.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Rent paid account is a:",
        options: ["Personal account", "Real account", "Nominal account", "Valuation account"],
        correctAnswer: 2,
        explanation: "Rent paid is an expense, so it falls under Nominal account category.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-7",
    chapterId: "11-7",
    title: "Origin of Transactions – Source Documents and Vouchers",
    questions: [
      {
        id: "q1",
        question: "Which document is the basis for recording transactions?",
        options: ["Ledger", "Trial Balance", "Source Document", "Balance Sheet"],
        correctAnswer: 2,
        explanation: "Source documents like invoices, receipts, and vouchers are the primary basis for recording transactions.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "A debit note is sent to:",
        options: ["Customer", "Supplier", "Bank", "Employee"],
        correctAnswer: 1,
        explanation: "A debit note is sent to the supplier when goods are returned to them.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Cash memo is issued for:",
        options: ["Credit sales", "Cash sales", "Purchase returns", "Bank transactions"],
        correctAnswer: 1,
        explanation: "Cash memo is issued for cash sales as evidence of the transaction.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "A voucher is prepared by:",
        options: ["The buyer only", "The seller only", "The accountant of the business", "The bank"],
        correctAnswer: 2,
        explanation: "Vouchers are prepared internally by the accountant based on source documents for recording transactions.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Credit note is issued when:",
        options: ["Goods are sold on credit", "Goods are returned by customer", "Payment is received", "Goods are purchased"],
        correctAnswer: 1,
        explanation: "A credit note is issued to the customer when goods are returned by them, acknowledging the return.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-8",
    chapterId: "11-8",
    title: "Journal",
    questions: [
      {
        id: "q1",
        question: "Journal is called the book of:",
        options: ["Final entry", "Original entry", "Secondary entry", "Cash entry"],
        correctAnswer: 1,
        explanation: "Journal is called the book of original entry as transactions are first recorded here.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Compound journal entry involves:",
        options: ["Only one debit and one credit", "Multiple debits or credits or both", "No debit or credit", "Only cash transactions"],
        correctAnswer: 1,
        explanation: "A compound journal entry involves multiple debits or multiple credits or both.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Narration in journal entry is:",
        options: ["Optional", "A brief explanation of the transaction", "The amount column", "The date column"],
        correctAnswer: 1,
        explanation: "Narration is a brief explanation written below the journal entry to describe the transaction.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "Opening entry is passed at the:",
        options: ["End of accounting year", "Beginning of accounting year", "Middle of the year", "Any time"],
        correctAnswer: 1,
        explanation: "Opening entry is passed at the beginning of the accounting year to bring forward previous year's balances.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "L.F. column in journal stands for:",
        options: ["Last Folio", "Ledger Folio", "Liability Factor", "Loss Figure"],
        correctAnswer: 1,
        explanation: "L.F. stands for Ledger Folio, which refers to the page number of the ledger where the entry is posted.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-9",
    chapterId: "11-9",
    title: "Ledger",
    questions: [
      {
        id: "q1",
        question: "Ledger is called the:",
        options: ["Book of original entry", "Principal book of accounts", "Subsidiary book", "Cash book"],
        correctAnswer: 1,
        explanation: "Ledger is called the principal book of accounts as all accounts are maintained here.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Posting means:",
        options: ["Writing journal entries", "Transferring entries from journal to ledger", "Preparing trial balance", "Closing accounts"],
        correctAnswer: 1,
        explanation: "Posting is the process of transferring journal entries to respective ledger accounts.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Balancing of account means:",
        options: ["Making both sides equal", "Finding the difference between debit and credit totals", "Closing the account", "Opening a new account"],
        correctAnswer: 1,
        explanation: "Balancing means finding the difference between total debits and total credits of an account.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "A personal account with debit balance indicates:",
        options: ["We owe them money", "They owe us money", "No transaction", "Account is closed"],
        correctAnswer: 1,
        explanation: "A debit balance in a personal account means the person owes money to the business (is a debtor).",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Nominal accounts are balanced:",
        options: ["Monthly", "Annually by transferring to Trading/P&L A/c", "Never", "Weekly"],
        correctAnswer: 1,
        explanation: "Nominal accounts (expenses and incomes) are closed by transferring their balances to Trading or P&L Account at year-end.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-10",
    chapterId: "11-10",
    title: "Special Purpose Books I – Cash Book",
    questions: [
      {
        id: "q1",
        question: "Cash book is a:",
        options: ["Journal only", "Ledger only", "Both journal and ledger", "Neither"],
        correctAnswer: 2,
        explanation: "Cash book serves as both journal (for recording) and ledger (no separate cash account needed).",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Contra entry is recorded in:",
        options: ["Single column cash book", "Double column cash book", "Triple column cash book", "Petty cash book"],
        correctAnswer: 2,
        explanation: "Contra entry (cash deposited to bank or withdrawn) is recorded in triple column cash book which has cash and bank columns.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Petty cash book follows:",
        options: ["Simple system", "Imprest system", "Double entry system", "Single entry system"],
        correctAnswer: 1,
        explanation: "Petty cash book typically follows imprest system where a fixed amount is given and reimbursed when spent.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Bank column showing credit balance means:",
        options: ["Favourable balance", "Overdraft", "No transactions", "Error in recording"],
        correctAnswer: 1,
        explanation: "A credit balance in the bank column indicates bank overdraft (we owe money to the bank).",
        difficulty: "hard"
      },
      {
        id: "q5",
        question: "Discount column in cash book is:",
        options: ["Balanced like other columns", "Not balanced, only totalled", "Left blank", "Always zero"],
        correctAnswer: 1,
        explanation: "Discount columns are only totalled, not balanced, as they are memorandum columns.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-11",
    chapterId: "11-11",
    title: "Special Purpose Books II – Other Books",
    questions: [
      {
        id: "q1",
        question: "Purchase book records:",
        options: ["All purchases", "Only cash purchases", "Only credit purchases of goods", "Only credit purchases of assets"],
        correctAnswer: 2,
        explanation: "Purchase book records only credit purchases of goods meant for resale.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Sales return book is also called:",
        options: ["Purchase book", "Returns Inward book", "Returns Outward book", "Journal Proper"],
        correctAnswer: 1,
        explanation: "Sales return book is also known as Returns Inward book as goods come back to the business.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Trade discount is:",
        options: ["Recorded in books", "Deducted from invoice", "Shown in ledger", "Added to cost"],
        correctAnswer: 1,
        explanation: "Trade discount is deducted from the list price and only the net amount is recorded.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "Journal Proper records:",
        options: ["All cash transactions", "All credit transactions", "Transactions not recorded in other subsidiary books", "Only opening entries"],
        correctAnswer: 2,
        explanation: "Journal Proper records transactions that cannot be recorded in any other special purpose book.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Credit purchase of furniture is recorded in:",
        options: ["Purchase book", "Journal Proper", "Cash book", "Sales book"],
        correctAnswer: 1,
        explanation: "Credit purchase of assets (not goods) is recorded in Journal Proper, not Purchase Book.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-12",
    chapterId: "11-12",
    title: "Accounting of Goods and Services Tax (GST)",
    questions: [
      {
        id: "q1",
        question: "GST is a:",
        options: ["Direct tax", "Indirect tax", "Income tax", "Property tax"],
        correctAnswer: 1,
        explanation: "GST (Goods and Services Tax) is an indirect tax levied on supply of goods and services.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Intra-state supply attracts:",
        options: ["IGST", "CGST and SGST", "Only CGST", "Only SGST"],
        correctAnswer: 1,
        explanation: "Intra-state (within same state) supply attracts both CGST and SGST in equal proportions.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Input Tax Credit means:",
        options: ["Tax paid on sales", "Credit for tax paid on purchases", "Tax refund", "Tax exemption"],
        correctAnswer: 1,
        explanation: "Input Tax Credit is the credit received for tax already paid on inputs (purchases) against tax on output (sales).",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "IGST is levied on:",
        options: ["Intra-state supply", "Inter-state supply", "All supplies", "Exempt supplies"],
        correctAnswer: 1,
        explanation: "IGST (Integrated GST) is levied on inter-state supply of goods and services.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "GST is collected by:",
        options: ["Only Central Government", "Only State Government", "Both Central and State Government", "Local bodies"],
        correctAnswer: 2,
        explanation: "GST is collected by both Central (CGST) and State Government (SGST), or as IGST by Central Government for inter-state.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-13",
    chapterId: "11-13",
    title: "Bank Reconciliation Statement",
    questions: [
      {
        id: "q1",
        question: "BRS is prepared to:",
        options: ["Record bank transactions", "Reconcile cash book and bank statement", "Calculate bank balance", "Open bank account"],
        correctAnswer: 1,
        explanation: "BRS is prepared to reconcile the difference between cash book balance and bank statement balance.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Cheque issued but not presented causes:",
        options: ["Excess in cash book", "Excess in bank statement", "No difference", "Both balances equal"],
        correctAnswer: 1,
        explanation: "When cheque is issued but not presented, cash book shows less but bank statement shows higher balance.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Direct credit by bank means:",
        options: ["Cash book balance increases", "Bank statement shows more than cash book", "Both balances increase", "No effect"],
        correctAnswer: 1,
        explanation: "Direct credit (like interest) appears in bank statement first, causing difference until recorded in cash book.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Bank charges cause cash book to show:",
        options: ["Higher balance than bank", "Lower balance", "Same balance as bank", "Zero balance"],
        correctAnswer: 0,
        explanation: "Bank charges deducted by bank but not recorded in cash book causes cash book to show higher balance.",
        difficulty: "hard"
      },
      {
        id: "q5",
        question: "Cheque deposited but not collected:",
        options: ["Increases bank balance", "Cash book shows more than bank", "Bank shows more", "No difference"],
        correctAnswer: 1,
        explanation: "Cheque deposited but not yet collected means cash book shows higher balance than bank statement.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-14",
    chapterId: "11-14",
    title: "Trial Balance",
    questions: [
      {
        id: "q1",
        question: "Trial balance proves:",
        options: ["Accuracy of all entries", "Arithmetical accuracy only", "No errors exist", "Profit or loss"],
        correctAnswer: 1,
        explanation: "Trial balance only proves arithmetical accuracy (debits equal credits), not correctness of entries.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Trial balance is prepared:",
        options: ["Daily", "Weekly", "At end of accounting period", "Monthly only"],
        correctAnswer: 2,
        explanation: "Trial balance is generally prepared at the end of the accounting period before final accounts.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Which error is NOT revealed by trial balance?",
        options: ["Wrong totalling", "Posting to wrong side", "Error of complete omission", "Single-sided entry"],
        correctAnswer: 2,
        explanation: "Error of complete omission does not affect trial balance as both debit and credit are missing.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Capital account appears on which side of trial balance?",
        options: ["Debit side", "Credit side", "Both sides", "Not in trial balance"],
        correctAnswer: 1,
        explanation: "Capital has a credit balance, so it appears on the credit side of the trial balance.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "If trial balance totals don't match, the difference is placed in:",
        options: ["Capital account", "Cash account", "Suspense account", "Profit & Loss account"],
        correctAnswer: 2,
        explanation: "When trial balance doesn't agree, the difference is temporarily placed in Suspense Account.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-15",
    chapterId: "11-15",
    title: "Depreciation",
    questions: [
      {
        id: "q1",
        question: "Depreciation is:",
        options: ["Increase in asset value", "Decrease in asset value due to use", "Market value of asset", "Purchase price of asset"],
        correctAnswer: 1,
        explanation: "Depreciation is the decrease in value of an asset due to use, wear and tear, or obsolescence.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Under straight line method, depreciation is:",
        options: ["Same every year", "Different every year", "Increasing every year", "Zero in first year"],
        correctAnswer: 0,
        explanation: "Under straight line method, an equal amount of depreciation is charged every year.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "WDV method gives:",
        options: ["Equal depreciation", "Decreasing depreciation each year", "Increasing depreciation", "No depreciation"],
        correctAnswer: 1,
        explanation: "Under Written Down Value method, depreciation decreases every year as it's calculated on reducing balance.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Depreciation is provided on:",
        options: ["All assets", "Only fixed tangible assets", "Only current assets", "Only intangible assets"],
        correctAnswer: 1,
        explanation: "Depreciation is provided on fixed tangible assets like machinery, building, furniture etc.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Scrap value is:",
        options: ["Original cost", "Estimated residual value at end of useful life", "Market value", "Book value"],
        correctAnswer: 1,
        explanation: "Scrap value (residual value) is the estimated value of the asset at the end of its useful life.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-16",
    chapterId: "11-16",
    title: "Provisions and Reserves",
    questions: [
      {
        id: "q1",
        question: "Provision is created against:",
        options: ["Known liability of uncertain amount", "Future profits", "Increase in assets", "Capital expenditure"],
        correctAnswer: 0,
        explanation: "Provision is created for known liabilities or losses of uncertain amount.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Reserve is appropriation of:",
        options: ["Loss", "Profit", "Capital", "Liability"],
        correctAnswer: 1,
        explanation: "Reserve is an appropriation of profit set aside for future use or contingencies.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "General reserve can be used for:",
        options: ["Only specific purposes", "Any purpose", "Only paying dividends", "Only paying debts"],
        correctAnswer: 1,
        explanation: "General reserve is a free reserve that can be used for any purpose as decided by management.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Provision for bad debts is:",
        options: ["A charge against profit", "An appropriation of profit", "An asset", "Capital receipt"],
        correctAnswer: 0,
        explanation: "Provision for bad debts is a charge against profit, created to cover expected bad debts.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Secret reserve is created by:",
        options: ["Overstating assets", "Understating assets or overstating liabilities", "Correct valuation", "Showing all profits"],
        correctAnswer: 1,
        explanation: "Secret reserve is created by understating assets or overstating liabilities, not disclosed in balance sheet.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-17",
    chapterId: "11-17",
    title: "Rectification of Errors",
    questions: [
      {
        id: "q1",
        question: "Error of omission means:",
        options: ["Wrong amount recorded", "Transaction not recorded at all", "Wrong account debited", "Entry made twice"],
        correctAnswer: 1,
        explanation: "Error of omission occurs when a transaction is completely or partially omitted from the books.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Error of principle is:",
        options: ["Clerical error", "Violation of accounting principles", "Calculation mistake", "Omission of entry"],
        correctAnswer: 1,
        explanation: "Error of principle occurs when an entry violates accounting principles, like treating capital as revenue.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Suspense account is used when:",
        options: ["Profit is high", "Trial balance doesn't agree", "Cash is short", "Bank balance is low"],
        correctAnswer: 1,
        explanation: "Suspense account is opened with the difference when trial balance doesn't agree.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "Compensating errors:",
        options: ["Affect trial balance", "Cancel each other's effect", "Cannot be detected", "Are always intentional"],
        correctAnswer: 1,
        explanation: "Compensating errors are two or more errors that cancel each other's effect on trial balance.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Error of commission includes:",
        options: ["Wrong principle applied", "Wrong amount posted to correct account", "Transaction omitted", "No entry made"],
        correctAnswer: 1,
        explanation: "Error of commission involves posting correct entry but with wrong amount, or to wrong side of correct account.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-18",
    chapterId: "11-18",
    title: "Financial Statements of Sole Proprietorship",
    questions: [
      {
        id: "q1",
        question: "Trading account shows:",
        options: ["Net profit", "Gross profit", "Total assets", "Total liabilities"],
        correctAnswer: 1,
        explanation: "Trading account shows gross profit or gross loss by matching sales with cost of goods sold.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Carriage inward is debited to:",
        options: ["Profit and Loss Account", "Trading Account", "Balance Sheet", "Capital Account"],
        correctAnswer: 1,
        explanation: "Carriage inward is part of cost of goods purchased, so it's debited to Trading Account.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Balance Sheet shows:",
        options: ["Profit or loss", "Financial position at a point of time", "Cash flow", "Sales revenue"],
        correctAnswer: 1,
        explanation: "Balance Sheet shows the financial position (assets, liabilities, capital) at a specific date.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "Wages paid for installing machinery is:",
        options: ["Revenue expenditure", "Capital expenditure", "Deferred expenditure", "Loss"],
        correctAnswer: 1,
        explanation: "Wages for installing machinery is capital expenditure as it adds to the value of the asset.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Net profit is transferred to:",
        options: ["Trading Account", "Capital Account", "Cash Account", "Bank Account"],
        correctAnswer: 1,
        explanation: "Net profit from P&L Account is transferred to the owner's Capital Account in Balance Sheet.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-19",
    chapterId: "11-19",
    title: "Adjustments in Preparation of Financial Statements",
    questions: [
      {
        id: "q1",
        question: "Closing stock appears:",
        options: ["Only in Trading Account", "Only in Balance Sheet", "In both Trading Account and Balance Sheet", "Neither"],
        correctAnswer: 2,
        explanation: "Closing stock appears on credit side of Trading Account and as current asset in Balance Sheet.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Prepaid expense is a:",
        options: ["Liability", "Current asset", "Fixed asset", "Loss"],
        correctAnswer: 1,
        explanation: "Prepaid expense is a current asset as it represents payment made in advance for future benefits.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Outstanding expense is shown as:",
        options: ["Asset", "Current liability", "Capital", "Reserve"],
        correctAnswer: 1,
        explanation: "Outstanding expense is a current liability as it represents amount due to be paid.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Accrued income is:",
        options: ["Income received in advance", "Income earned but not received", "Income received and earned", "Loss"],
        correctAnswer: 1,
        explanation: "Accrued income is income that has been earned during the period but not yet received.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Provision for doubtful debts is deducted from:",
        options: ["Sales", "Purchases", "Sundry Debtors", "Cash balance"],
        correctAnswer: 2,
        explanation: "Provision for doubtful debts is deducted from Sundry Debtors on the assets side of Balance Sheet.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-20",
    chapterId: "11-20",
    title: "Accounts from Incomplete Records – Single Entry System",
    questions: [
      {
        id: "q1",
        question: "Single entry system maintains records of:",
        options: ["All accounts", "Only personal and cash accounts", "Only real accounts", "Only nominal accounts"],
        correctAnswer: 1,
        explanation: "Single entry system maintains only personal accounts and cash book, not complete double entry.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Statement of Affairs is similar to:",
        options: ["Trading Account", "Profit & Loss Account", "Balance Sheet", "Cash Flow Statement"],
        correctAnswer: 2,
        explanation: "Statement of Affairs is similar to Balance Sheet but prepared from incomplete records.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Profit under single entry is calculated by:",
        options: ["Sales minus purchases", "Closing capital minus opening capital plus drawings minus fresh capital", "Income minus expenses", "Assets minus liabilities"],
        correctAnswer: 1,
        explanation: "Profit = Closing Capital - Opening Capital + Drawings - Additional Capital introduced.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Single entry system is also called:",
        options: ["Scientific system", "Incomplete records", "Modern system", "Standard system"],
        correctAnswer: 1,
        explanation: "Single entry system is also known as accounting from incomplete records.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Which is a limitation of single entry system?",
        options: ["Easy to maintain", "Trial balance cannot be prepared", "Low cost", "Less time consuming"],
        correctAnswer: 1,
        explanation: "Trial balance cannot be prepared under single entry as complete double entry is not followed.",
        difficulty: "hard"
      }
    ]
  }
];
