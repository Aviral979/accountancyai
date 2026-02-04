export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface Quiz {
  id: string;
  chapterId: string;
  title: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  // Class 11 Quizzes
  {
    id: "quiz-11-1",
    chapterId: "11-1",
    title: "Introduction to Accounting",
    questions: [
      {
        id: "q1",
        question: "What is the primary objective of accounting?",
        options: [
          "To maintain records of business transactions",
          "To calculate taxes",
          "To pay salaries",
          "To purchase goods"
        ],
        correctAnswer: 0,
        explanation: "The primary objective of accounting is to maintain systematic records of business transactions.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Which of the following is NOT a branch of accounting?",
        options: [
          "Financial Accounting",
          "Cost Accounting",
          "Management Accounting",
          "Social Accounting"
        ],
        correctAnswer: 3,
        explanation: "Social Accounting is not considered a main branch of accounting. The main branches are Financial, Cost, and Management Accounting.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Who is called the 'Father of Accounting'?",
        options: [
          "Adam Smith",
          "Luca Pacioli",
          "Charles Babbage",
          "J.M. Keynes"
        ],
        correctAnswer: 1,
        explanation: "Luca Pacioli, an Italian mathematician, is known as the Father of Accounting for documenting the double-entry bookkeeping system.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "The accounting equation is:",
        options: [
          "Assets = Capital + Liabilities",
          "Assets = Capital - Liabilities",
          "Assets + Capital = Liabilities",
          "Assets - Capital = Liabilities"
        ],
        correctAnswer: 0,
        explanation: "The fundamental accounting equation is Assets = Capital + Liabilities, which forms the basis of double-entry bookkeeping.",
        difficulty: "easy"
      },
      {
        id: "q5",
        question: "Which characteristic of accounting information means it should be free from bias?",
        options: [
          "Relevance",
          "Reliability",
          "Neutrality",
          "Comparability"
        ],
        correctAnswer: 2,
        explanation: "Neutrality means accounting information should be free from bias and present a fair view without favoring any particular party.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-2",
    chapterId: "11-2",
    title: "Theory Base of Accounting",
    questions: [
      {
        id: "q1",
        question: "Going Concern concept assumes that:",
        options: [
          "Business will be liquidated soon",
          "Business will continue indefinitely",
          "Business has limited life",
          "Business will make profits"
        ],
        correctAnswer: 1,
        explanation: "The Going Concern concept assumes that the business will continue its operations indefinitely and has no intention to close down.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Which concept requires recording transactions at actual cost?",
        options: [
          "Money Measurement Concept",
          "Cost Concept",
          "Realization Concept",
          "Matching Concept"
        ],
        correctAnswer: 1,
        explanation: "The Cost Concept requires that assets be recorded at their historical cost, i.e., the actual amount paid to acquire them.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "The accounting period is usually:",
        options: [
          "3 months",
          "6 months",
          "12 months",
          "24 months"
        ],
        correctAnswer: 2,
        explanation: "The standard accounting period is 12 months, which allows for annual reporting and comparison of financial performance.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "Dual aspect concept means:",
        options: [
          "Two persons are involved",
          "Every transaction has two aspects",
          "Business has two owners",
          "Profit is double the capital"
        ],
        correctAnswer: 1,
        explanation: "Dual aspect concept means every transaction has two aspects - debit and credit - which are equal and form the basis of double-entry system.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "GAAP stands for:",
        options: [
          "Generally Accepted Accounting Practices",
          "Generally Accepted Accounting Principles",
          "Generally Applied Accounting Principles",
          "Globally Accepted Accounting Principles"
        ],
        correctAnswer: 1,
        explanation: "GAAP stands for Generally Accepted Accounting Principles, which are the standard guidelines for financial accounting.",
        difficulty: "easy"
      }
    ]
  },
  {
    id: "quiz-11-3",
    chapterId: "11-3",
    title: "Recording of Transactions – I",
    questions: [
      {
        id: "q1",
        question: "Which document is the basis for recording transactions?",
        options: [
          "Ledger",
          "Trial Balance",
          "Source Document",
          "Balance Sheet"
        ],
        correctAnswer: 2,
        explanation: "Source documents like invoices, receipts, and vouchers are the primary basis for recording transactions.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "In double entry system, every transaction affects:",
        options: [
          "One account only",
          "Two accounts",
          "Three accounts",
          "All accounts"
        ],
        correctAnswer: 1,
        explanation: "In double entry system, every transaction affects at least two accounts - one is debited and another is credited.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "The rule 'Debit the receiver, Credit the giver' applies to:",
        options: [
          "Personal accounts",
          "Real accounts",
          "Nominal accounts",
          "All accounts"
        ],
        correctAnswer: 0,
        explanation: "This golden rule applies to Personal accounts which represent persons or organizations.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Which book is called the book of original entry?",
        options: [
          "Ledger",
          "Journal",
          "Trial Balance",
          "Cash Book"
        ],
        correctAnswer: 1,
        explanation: "Journal is called the book of original entry as transactions are first recorded here before posting to ledger.",
        difficulty: "easy"
      },
      {
        id: "q5",
        question: "Compound journal entry involves:",
        options: [
          "Only one debit and one credit",
          "Multiple debits or credits or both",
          "No debit or credit",
          "Only cash transactions"
        ],
        correctAnswer: 1,
        explanation: "A compound journal entry involves multiple debits or multiple credits or both, but total debits must equal total credits.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-4",
    chapterId: "11-4",
    title: "Recording of Transactions – II",
    questions: [
      {
        id: "q1",
        question: "Cash book is a:",
        options: [
          "Journal only",
          "Ledger only",
          "Both journal and ledger",
          "Neither journal nor ledger"
        ],
        correctAnswer: 2,
        explanation: "Cash book serves as both journal (for recording) and ledger (no separate cash account needed in ledger).",
        difficulty: "medium"
      },
      {
        id: "q2",
        question: "Purchase book records:",
        options: [
          "All purchases",
          "Only cash purchases",
          "Only credit purchases of goods",
          "Only credit purchases of assets"
        ],
        correctAnswer: 2,
        explanation: "Purchase book records only credit purchases of goods meant for resale, not cash purchases or asset purchases.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Contra entry is recorded in:",
        options: [
          "Single column cash book",
          "Double column cash book",
          "Triple column cash book",
          "Petty cash book"
        ],
        correctAnswer: 2,
        explanation: "Contra entry (cash deposited to bank or withdrawn) is recorded in triple column cash book which has cash and bank columns.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "Trade discount is:",
        options: [
          "Recorded in books",
          "Deducted from invoice",
          "Shown separately in ledger",
          "Added to cost"
        ],
        correctAnswer: 1,
        explanation: "Trade discount is deducted from the list price and only the net amount is recorded in the books.",
        difficulty: "easy"
      },
      {
        id: "q5",
        question: "Petty cash book follows:",
        options: [
          "Simple system",
          "Imprest system",
          "Double entry system",
          "Single entry system"
        ],
        correctAnswer: 1,
        explanation: "Petty cash book typically follows imprest system where a fixed amount is given and reimbursed when spent.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-11-5",
    chapterId: "11-5",
    title: "Bank Reconciliation Statement",
    questions: [
      {
        id: "q1",
        question: "BRS is prepared to:",
        options: [
          "Record bank transactions",
          "Reconcile cash book and bank statement",
          "Calculate bank balance",
          "Open bank account"
        ],
        correctAnswer: 1,
        explanation: "Bank Reconciliation Statement is prepared to reconcile the difference between cash book balance and bank statement balance.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Cheque issued but not presented causes:",
        options: [
          "Excess in cash book",
          "Excess in bank statement",
          "No difference",
          "Both balances equal"
        ],
        correctAnswer: 1,
        explanation: "When cheque is issued but not presented, cash book shows less balance but bank statement shows higher balance.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Direct credit by bank means:",
        options: [
          "Cash book balance increases",
          "Bank statement balance increases",
          "Both balances increase",
          "No effect"
        ],
        correctAnswer: 1,
        explanation: "Direct credit (like interest) appears in bank statement first, causing difference until recorded in cash book.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "Cheque deposited but not collected is:",
        options: [
          "Added to bank balance",
          "Deducted from bank balance",
          "Added to cash book balance",
          "Not recorded anywhere"
        ],
        correctAnswer: 1,
        explanation: "Cheque deposited but not yet collected is deducted from bank statement balance when preparing BRS.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Bank charges cause cash book to show:",
        options: [
          "Higher balance",
          "Lower balance",
          "Same balance as bank",
          "Zero balance"
        ],
        correctAnswer: 0,
        explanation: "Bank charges deducted by bank but not recorded in cash book causes cash book to show higher balance.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-6",
    chapterId: "11-6",
    title: "Trial Balance and Rectification of Errors",
    questions: [
      {
        id: "q1",
        question: "Trial balance proves:",
        options: [
          "Accuracy of all entries",
          "Arithmetical accuracy only",
          "No errors exist",
          "Profit or loss"
        ],
        correctAnswer: 1,
        explanation: "Trial balance only proves arithmetical accuracy (debits equal credits), not the correctness of entries.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Error of omission means:",
        options: [
          "Wrong amount recorded",
          "Transaction not recorded at all",
          "Wrong account debited",
          "Entry made twice"
        ],
        correctAnswer: 1,
        explanation: "Error of omission occurs when a transaction is completely omitted from the books of accounts.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Suspense account is used when:",
        options: [
          "Profit is high",
          "Trial balance doesn't agree",
          "Cash is short",
          "Bank balance is low"
        ],
        correctAnswer: 1,
        explanation: "Suspense account is opened with the difference when trial balance doesn't agree, and closed when errors are found.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Error of principle is:",
        options: [
          "Clerical error",
          "Violation of accounting principles",
          "Calculation mistake",
          "Omission of entry"
        ],
        correctAnswer: 1,
        explanation: "Error of principle occurs when an entry violates accounting principles, like treating revenue as capital expenditure.",
        difficulty: "hard"
      },
      {
        id: "q5",
        question: "Compensating errors:",
        options: [
          "Affect trial balance",
          "Cancel each other's effect",
          "Cannot be detected",
          "Are always intentional"
        ],
        correctAnswer: 1,
        explanation: "Compensating errors are two or more errors that cancel each other's effect on trial balance.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-11-7",
    chapterId: "11-7",
    title: "Depreciation, Provisions and Reserves",
    questions: [
      {
        id: "q1",
        question: "Depreciation is:",
        options: [
          "Increase in asset value",
          "Decrease in asset value",
          "Market value of asset",
          "Purchase price of asset"
        ],
        correctAnswer: 1,
        explanation: "Depreciation is the decrease in the value of an asset due to use, wear and tear, or obsolescence.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Under straight line method, depreciation is:",
        options: [
          "Same every year",
          "Different every year",
          "Increasing every year",
          "Zero in first year"
        ],
        correctAnswer: 0,
        explanation: "Under straight line method, an equal amount of depreciation is charged every year.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Provision is created against:",
        options: [
          "Known liability of uncertain amount",
          "Future profits",
          "Increase in assets",
          "Capital expenditure"
        ],
        correctAnswer: 0,
        explanation: "Provision is created for known liabilities or losses of uncertain amount, like bad debts provision.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Reserve is appropriation of:",
        options: [
          "Loss",
          "Profit",
          "Capital",
          "Liability"
        ],
        correctAnswer: 1,
        explanation: "Reserve is an appropriation of profit set aside for future use or contingencies.",
        difficulty: "easy"
      },
      {
        id: "q5",
        question: "Written Down Value method gives:",
        options: [
          "Equal depreciation",
          "Decreasing depreciation",
          "Increasing depreciation",
          "No depreciation"
        ],
        correctAnswer: 1,
        explanation: "Under WDV method, depreciation decreases every year as it's calculated on the reducing balance.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-11-8",
    chapterId: "11-8",
    title: "Bills of Exchange",
    questions: [
      {
        id: "q1",
        question: "A bill of exchange has how many parties?",
        options: [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        correctAnswer: 2,
        explanation: "A bill of exchange has three parties: Drawer, Drawee, and Payee.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Discounting of bill means:",
        options: [
          "Selling bill to bank before maturity",
          "Paying bill on due date",
          "Refusing to pay bill",
          "Renewing the bill"
        ],
        correctAnswer: 0,
        explanation: "Discounting means selling the bill to a bank before maturity to get immediate cash minus discount charges.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "When a bill is dishonoured:",
        options: [
          "Payment is received",
          "Payment is not received on due date",
          "Bill is renewed",
          "Bill is endorsed"
        ],
        correctAnswer: 1,
        explanation: "A bill is dishonoured when the drawee fails to make payment on the due date.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "Endorsement of bill means:",
        options: [
          "Cancelling the bill",
          "Transferring the bill to another party",
          "Paying the bill early",
          "Dishonoring the bill"
        ],
        correctAnswer: 1,
        explanation: "Endorsement means transferring the bill to a third party by signing on the back of the bill.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Days of grace for a bill are:",
        options: [
          "2 days",
          "3 days",
          "7 days",
          "No grace period"
        ],
        correctAnswer: 1,
        explanation: "In India, 3 days of grace are added to the maturity date of a bill of exchange.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-11-9",
    chapterId: "11-9",
    title: "Financial Statements – I",
    questions: [
      {
        id: "q1",
        question: "Trading account shows:",
        options: [
          "Net profit",
          "Gross profit",
          "Total assets",
          "Total liabilities"
        ],
        correctAnswer: 1,
        explanation: "Trading account shows gross profit or gross loss by matching sales with cost of goods sold.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Carriage inward is debited to:",
        options: [
          "Profit and Loss Account",
          "Trading Account",
          "Balance Sheet",
          "Capital Account"
        ],
        correctAnswer: 1,
        explanation: "Carriage inward is part of cost of goods purchased, so it's debited to Trading Account.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Closing stock appears:",
        options: [
          "Only in Trading Account",
          "Only in Balance Sheet",
          "In both Trading Account and Balance Sheet",
          "Neither"
        ],
        correctAnswer: 2,
        explanation: "Closing stock appears on credit side of Trading Account and as current asset in Balance Sheet.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "Wages paid for installing machinery is:",
        options: [
          "Revenue expenditure",
          "Capital expenditure",
          "Deferred expenditure",
          "Loss"
        ],
        correctAnswer: 1,
        explanation: "Wages for installing machinery is capital expenditure as it adds to the value of the asset.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Profit and Loss Account is prepared to find:",
        options: [
          "Gross profit only",
          "Net profit or loss",
          "Total assets",
          "Cash balance"
        ],
        correctAnswer: 1,
        explanation: "Profit and Loss Account is prepared to ascertain net profit or net loss after all expenses and incomes.",
        difficulty: "easy"
      }
    ]
  },
  {
    id: "quiz-11-10",
    chapterId: "11-10",
    title: "Financial Statements – II",
    questions: [
      {
        id: "q1",
        question: "Balance Sheet shows:",
        options: [
          "Profit or loss",
          "Financial position at a point of time",
          "Cash flow",
          "Sales revenue"
        ],
        correctAnswer: 1,
        explanation: "Balance Sheet shows the financial position (assets, liabilities, capital) at a specific point of time.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Prepaid expense is a:",
        options: [
          "Liability",
          "Current asset",
          "Fixed asset",
          "Loss"
        ],
        correctAnswer: 1,
        explanation: "Prepaid expense is a current asset as it represents payment made in advance for future benefits.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Outstanding expense is shown as:",
        options: [
          "Asset",
          "Current liability",
          "Capital",
          "Reserve"
        ],
        correctAnswer: 1,
        explanation: "Outstanding expense is a current liability as it represents amount due to be paid.",
        difficulty: "easy"
      },
      {
        id: "q4",
        question: "Accrued income is:",
        options: [
          "Income received in advance",
          "Income earned but not received",
          "Income received and earned",
          "Loss"
        ],
        correctAnswer: 1,
        explanation: "Accrued income is income that has been earned during the period but not yet received.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Goodwill is a:",
        options: [
          "Current asset",
          "Fixed tangible asset",
          "Intangible asset",
          "Fictitious asset"
        ],
        correctAnswer: 2,
        explanation: "Goodwill is an intangible fixed asset representing the value of business reputation.",
        difficulty: "medium"
      }
    ]
  },
  // Class 12 Quizzes
  {
    id: "quiz-12-1",
    chapterId: "12-1",
    title: "Not-for-Profit Organisations",
    questions: [
      {
        id: "q1",
        question: "Which account shows all cash receipts and payments?",
        options: [
          "Income and Expenditure Account",
          "Receipts and Payments Account",
          "Balance Sheet",
          "Trading Account"
        ],
        correctAnswer: 1,
        explanation: "Receipts and Payments Account is a summary of all cash transactions, showing both capital and revenue receipts and payments.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Subscription received in advance is a:",
        options: [
          "Current Asset",
          "Current Liability",
          "Fixed Asset",
          "Revenue"
        ],
        correctAnswer: 1,
        explanation: "Subscription received in advance is a current liability as it represents money received for services not yet provided.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Life membership fee is treated as:",
        options: [
          "Revenue Receipt",
          "Capital Receipt",
          "Current Liability",
          "Fixed Asset"
        ],
        correctAnswer: 1,
        explanation: "Life membership fee is a capital receipt as it is a one-time payment that provides membership for life.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "Excess of income over expenditure in NPO is called:",
        options: [
          "Profit",
          "Surplus",
          "Capital",
          "Reserve"
        ],
        correctAnswer: 1,
        explanation: "In Not-for-Profit Organizations, excess of income over expenditure is called Surplus, not profit, as they don't operate for profit motive.",
        difficulty: "easy"
      },
      {
        id: "q5",
        question: "Entrance fees should be treated as:",
        options: [
          "Always revenue",
          "Always capital",
          "As per policy of organization",
          "Never recorded"
        ],
        correctAnswer: 2,
        explanation: "Treatment of entrance fees depends on the policy of the organization - it can be treated as revenue or capitalized based on the amount.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-12-2",
    chapterId: "12-2",
    title: "Partnership: Basic Concepts",
    questions: [
      {
        id: "q1",
        question: "Maximum number of partners in a partnership firm is:",
        options: [
          "10",
          "20",
          "50",
          "Unlimited"
        ],
        correctAnswer: 2,
        explanation: "As per the Companies Act 2013, maximum number of partners in a partnership firm is 50.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "In absence of partnership deed, profit is shared:",
        options: [
          "In capital ratio",
          "Equally",
          "As decided by senior partner",
          "In time devoted ratio"
        ],
        correctAnswer: 1,
        explanation: "In the absence of a partnership deed, profits are shared equally among all partners as per the Partnership Act, 1932.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Interest on drawings is:",
        options: [
          "Credited to Capital Account",
          "Debited to Capital Account",
          "Shown in Balance Sheet",
          "Not recorded"
        ],
        correctAnswer: 1,
        explanation: "Interest on drawings is debited to the partner's Capital Account as it is a charge against the partner.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Fixed Capital Account shows balance:",
        options: [
          "Always Debit",
          "Always Credit",
          "Debit or Credit",
          "Zero balance"
        ],
        correctAnswer: 1,
        explanation: "Fixed Capital Account always shows a credit balance representing the partner's investment in the firm.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Which is NOT allowed in absence of partnership deed?",
        options: [
          "Interest on capital",
          "Equal profit sharing",
          "Interest on loan by partner",
          "Partner's salary"
        ],
        correctAnswer: 0,
        explanation: "Interest on capital is not allowed in the absence of a partnership deed, though interest on loan by partner at 6% p.a. is allowed.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-12-3",
    chapterId: "12-3",
    title: "Goodwill: Nature and Valuation",
    questions: [
      {
        id: "q1",
        question: "Goodwill is an:",
        options: [
          "Tangible asset",
          "Intangible asset",
          "Current asset",
          "Fictitious asset"
        ],
        correctAnswer: 1,
        explanation: "Goodwill is an intangible asset representing the reputation and earning capacity of the business.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Super profit is:",
        options: [
          "Total profit",
          "Actual profit minus normal profit",
          "Normal profit",
          "Average profit"
        ],
        correctAnswer: 1,
        explanation: "Super profit is the excess of actual profit over normal profit expected from similar businesses.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "In capitalisation of super profit method, goodwill equals:",
        options: [
          "Super profit × Years of purchase",
          "Super profit / Normal rate of return",
          "Average profit × Years",
          "Capital employed × Rate"
        ],
        correctAnswer: 0,
        explanation: "Under super profit method, goodwill = Super profit × Number of years of purchase.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "Average profit method considers:",
        options: [
          "Only current year profit",
          "Profits of past years",
          "Future expected profits",
          "Industry average"
        ],
        correctAnswer: 1,
        explanation: "Average profit method calculates goodwill based on the average of past years' profits.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Which affects goodwill negatively?",
        options: [
          "Good location",
          "Skilled employees",
          "Poor management",
          "Brand reputation"
        ],
        correctAnswer: 2,
        explanation: "Poor management negatively affects goodwill as it impacts the earning capacity and reputation of the business.",
        difficulty: "easy"
      }
    ]
  },
  {
    id: "quiz-12-4",
    chapterId: "12-4",
    title: "Change in Profit Sharing Ratio",
    questions: [
      {
        id: "q1",
        question: "Sacrificing ratio is calculated for:",
        options: [
          "Partner gaining share",
          "Partner sacrificing share",
          "Retiring partner",
          "New partner"
        ],
        correctAnswer: 1,
        explanation: "Sacrificing ratio is calculated for partners who give up part of their share in favor of others.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Gaining ratio = New ratio minus:",
        options: [
          "Sacrificing ratio",
          "Old ratio",
          "Capital ratio",
          "Profit ratio"
        ],
        correctAnswer: 1,
        explanation: "Gaining ratio is calculated as New ratio - Old ratio for each partner.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Revaluation account is prepared to record:",
        options: [
          "Cash transactions",
          "Change in asset/liability values",
          "Daily sales",
          "Partner drawings"
        ],
        correctAnswer: 1,
        explanation: "Revaluation account records changes in the values of assets and liabilities at the time of reconstitution.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "General reserve is distributed in:",
        options: [
          "New ratio",
          "Old ratio",
          "Equal ratio",
          "Capital ratio"
        ],
        correctAnswer: 1,
        explanation: "General reserve accumulated before change is distributed among partners in their old profit sharing ratio.",
        difficulty: "hard"
      },
      {
        id: "q5",
        question: "Gaining partner compensates sacrificing partner for:",
        options: [
          "Capital contribution",
          "Goodwill share",
          "Loan given",
          "Salary"
        ],
        correctAnswer: 1,
        explanation: "Gaining partner pays sacrificing partner for the goodwill share they are acquiring.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-12-5",
    chapterId: "12-5",
    title: "Admission of a Partner",
    questions: [
      {
        id: "q1",
        question: "New partner is admitted for:",
        options: [
          "Fresh capital only",
          "Capital and share in profits",
          "Managing the business",
          "Loan to firm"
        ],
        correctAnswer: 1,
        explanation: "A new partner is admitted for capital contribution and share in future profits of the firm.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Sacrificing ratio at admission is borne by:",
        options: [
          "New partner",
          "Old partners",
          "All partners equally",
          "Creditors"
        ],
        correctAnswer: 1,
        explanation: "Old partners sacrifice from their share to give the new partner a share in profits.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Premium for goodwill brought by new partner is shared by old partners in:",
        options: [
          "Old ratio",
          "Sacrificing ratio",
          "Capital ratio",
          "Equal ratio"
        ],
        correctAnswer: 1,
        explanation: "Goodwill premium is shared by old partners in their sacrificing ratio as compensation for sacrifice.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "Hidden goodwill is calculated when:",
        options: [
          "Goodwill is mentioned",
          "Goodwill is not mentioned but new partner pays premium",
          "No premium is paid",
          "Only capital is brought"
        ],
        correctAnswer: 1,
        explanation: "Hidden goodwill is inferred when new partner pays for share without explicit goodwill amount.",
        difficulty: "hard"
      },
      {
        id: "q5",
        question: "Revaluation profit is shared in:",
        options: [
          "New ratio",
          "Old ratio",
          "Sacrificing ratio",
          "Capital ratio"
        ],
        correctAnswer: 1,
        explanation: "Revaluation profit/loss is shared among old partners in their old profit sharing ratio.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-12-6",
    chapterId: "12-6",
    title: "Retirement of a Partner",
    questions: [
      {
        id: "q1",
        question: "On retirement, gaining ratio is calculated for:",
        options: [
          "Retiring partner",
          "Continuing partners",
          "All partners",
          "Creditors"
        ],
        correctAnswer: 1,
        explanation: "Gaining ratio is calculated for continuing partners who gain from retiring partner's share.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Retiring partner's share of goodwill is debited to:",
        options: [
          "Goodwill A/c",
          "Continuing partners in gaining ratio",
          "Cash A/c",
          "Revaluation A/c"
        ],
        correctAnswer: 1,
        explanation: "Retiring partner's goodwill share is debited to continuing partners' capital accounts in gaining ratio.",
        difficulty: "hard"
      },
      {
        id: "q3",
        question: "Amount due to retiring partner is transferred to:",
        options: [
          "Cash Account",
          "Retiring Partner's Loan Account",
          "Capital Account",
          "Profit & Loss Account"
        ],
        correctAnswer: 1,
        explanation: "Amount due but not paid immediately is transferred to Retiring Partner's Loan Account.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Interest on amount due to retiring partner is:",
        options: [
          "Charged to P&L A/c",
          "Not given",
          "Capitalized",
          "Added to goodwill"
        ],
        correctAnswer: 0,
        explanation: "Interest on retiring partner's dues is a business expense charged to Profit & Loss Account.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Accumulated profits are shared with retiring partner in:",
        options: [
          "New ratio",
          "Old ratio",
          "Gaining ratio",
          "Equal ratio"
        ],
        correctAnswer: 1,
        explanation: "Accumulated profits/reserves are shared among all partners including retiring partner in old ratio.",
        difficulty: "easy"
      }
    ]
  },
  {
    id: "quiz-12-7",
    chapterId: "12-7",
    title: "Death of a Partner",
    questions: [
      {
        id: "q1",
        question: "Death of a partner results in:",
        options: [
          "Dissolution of firm",
          "Reconstitution of firm",
          "Liquidation",
          "No effect"
        ],
        correctAnswer: 1,
        explanation: "Death of a partner results in reconstitution of the firm with remaining partners.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Deceased partner's share of profit till death is calculated on:",
        options: [
          "Last year's profit",
          "Average profit",
          "Time basis or turnover basis",
          "Capital ratio"
        ],
        correctAnswer: 2,
        explanation: "Share of profit till date of death can be calculated on time basis or turnover/sales basis.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Joint Life Policy amount on death is:",
        options: [
          "Distributed to all partners",
          "Given to deceased partner's legal representatives",
          "Credited to remaining partners",
          "Transferred to reserve"
        ],
        correctAnswer: 1,
        explanation: "JLP amount is usually credited to deceased partner's capital account for settlement.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "Amount due to deceased partner is paid to:",
        options: [
          "Partner's family",
          "Legal representatives/executors",
          "Government",
          "Other partners"
        ],
        correctAnswer: 1,
        explanation: "All dues of deceased partner are paid to legal representatives or executors of the estate.",
        difficulty: "easy"
      },
      {
        id: "q5",
        question: "Treatment of goodwill on death is similar to:",
        options: [
          "Admission",
          "Retirement",
          "Dissolution",
          "None of these"
        ],
        correctAnswer: 1,
        explanation: "Accounting treatment for goodwill on death is similar to retirement of a partner.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-12-8",
    chapterId: "12-8",
    title: "Dissolution of Partnership Firm",
    questions: [
      {
        id: "q1",
        question: "Dissolution means:",
        options: [
          "Change in partnership",
          "Complete closure of business",
          "Admission of partner",
          "Change in profit ratio"
        ],
        correctAnswer: 1,
        explanation: "Dissolution means complete closure of business and settlement of all accounts.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Realisation account is prepared to:",
        options: [
          "Record daily transactions",
          "Calculate profit/loss on dissolution",
          "Prepare balance sheet",
          "Record partner drawings"
        ],
        correctAnswer: 1,
        explanation: "Realisation account is prepared to calculate profit or loss on sale of assets and settlement of liabilities.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Partner taking over asset at agreed value:",
        options: [
          "Debits Realisation A/c",
          "Credits Realisation A/c",
          "Debits own Capital A/c",
          "Both B and C"
        ],
        correctAnswer: 3,
        explanation: "When partner takes over asset: Cr. Realisation A/c and Dr. Partner's Capital A/c with agreed value.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "Order of payment on dissolution is:",
        options: [
          "Partners first, then creditors",
          "Outside liabilities first, then partners' dues",
          "Equal distribution",
          "As per partnership deed only"
        ],
        correctAnswer: 1,
        explanation: "Outside creditors are paid first, then partners' loans, then capital accounts.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Unrecorded asset when sold:",
        options: [
          "Debited to Realisation A/c",
          "Credited to Realisation A/c",
          "Not recorded",
          "Debited to Partners"
        ],
        correctAnswer: 1,
        explanation: "Sale proceeds of unrecorded assets are credited to Realisation account as gain.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-12-9",
    chapterId: "12-9",
    title: "Accounting for Share Capital",
    questions: [
      {
        id: "q1",
        question: "Minimum subscription is:",
        options: [
          "100% of issued capital",
          "90% of issued capital",
          "Amount stated in prospectus",
          "50% of authorized capital"
        ],
        correctAnswer: 2,
        explanation: "Minimum subscription is the minimum amount that must be subscribed before allotment, as stated in prospectus.",
        difficulty: "medium"
      },
      {
        id: "q2",
        question: "Share premium is:",
        options: [
          "Extra amount above face value",
          "Discount on shares",
          "Dividend payment",
          "Loss on shares"
        ],
        correctAnswer: 0,
        explanation: "Share premium is the excess amount received over the face value of shares.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "On forfeiture of shares, share capital is debited with:",
        options: [
          "Face value",
          "Called-up amount",
          "Paid-up amount",
          "Market value"
        ],
        correctAnswer: 1,
        explanation: "Share Capital A/c is debited with called-up amount on forfeiture of shares.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "Forfeited shares can be reissued at:",
        options: [
          "Only at par",
          "Only at premium",
          "At discount up to forfeited amount",
          "Any price decided by directors"
        ],
        correctAnswer: 2,
        explanation: "Forfeited shares can be reissued at discount, but discount cannot exceed the forfeited amount.",
        difficulty: "hard"
      },
      {
        id: "q5",
        question: "Calls in arrears means:",
        options: [
          "Extra amount received",
          "Amount not received though due",
          "Premium on shares",
          "Advance against calls"
        ],
        correctAnswer: 1,
        explanation: "Calls in arrears represents the amount due from shareholders but not yet received.",
        difficulty: "easy"
      }
    ]
  },
  {
    id: "quiz-12-10",
    chapterId: "12-10",
    title: "Issue and Redemption of Debentures",
    questions: [
      {
        id: "q1",
        question: "Debenture holders are:",
        options: [
          "Owners of company",
          "Creditors of company",
          "Employees",
          "Customers"
        ],
        correctAnswer: 1,
        explanation: "Debenture holders are creditors who have lent money to the company and receive fixed interest.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Interest on debentures is:",
        options: [
          "Appropriation of profit",
          "Charge against profit",
          "Distribution of profit",
          "Capital expenditure"
        ],
        correctAnswer: 1,
        explanation: "Debenture interest is a charge against profit, payable whether company makes profit or not.",
        difficulty: "medium"
      },
      {
        id: "q3",
        question: "Debentures issued as collateral security are:",
        options: [
          "Recorded in books",
          "Not recorded, only shown by note",
          "Cancelled immediately",
          "Converted to shares"
        ],
        correctAnswer: 1,
        explanation: "Collateral debentures are not recorded in books, only disclosed by a note in balance sheet.",
        difficulty: "hard"
      },
      {
        id: "q4",
        question: "DRR stands for:",
        options: [
          "Debenture Reserve Ratio",
          "Debenture Redemption Reserve",
          "Debenture Return Reserve",
          "Debenture Revenue Reserve"
        ],
        correctAnswer: 1,
        explanation: "DRR is Debenture Redemption Reserve, created for redemption of debentures.",
        difficulty: "easy"
      },
      {
        id: "q5",
        question: "Loss on issue of debentures is:",
        options: [
          "Revenue loss",
          "Capital loss",
          "Fictitious asset",
          "Current asset"
        ],
        correctAnswer: 2,
        explanation: "Loss on issue of debentures (discount) is a fictitious asset written off over the life of debentures.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "quiz-12-11",
    chapterId: "12-11",
    title: "Financial Statements of a Company",
    questions: [
      {
        id: "q1",
        question: "Company financial statements are prepared as per:",
        options: [
          "Partnership Act",
          "Schedule III of Companies Act",
          "Income Tax Act",
          "SEBI Guidelines"
        ],
        correctAnswer: 1,
        explanation: "Company financial statements are prepared according to Schedule III of Companies Act 2013.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Statement of Profit and Loss shows:",
        options: [
          "Financial position",
          "Revenue and expenses for the year",
          "Cash flows",
          "Changes in equity"
        ],
        correctAnswer: 1,
        explanation: "Statement of Profit and Loss shows all revenues and expenses to determine profit/loss for the period.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Preliminary expenses are shown under:",
        options: [
          "Current assets",
          "Other non-current assets",
          "Current liabilities",
          "Reserves"
        ],
        correctAnswer: 1,
        explanation: "Preliminary expenses (if not written off) are shown under Other Non-current Assets.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Proposed dividend is:",
        options: [
          "Shown as current liability",
          "Disclosed in notes only",
          "Shown as reserve",
          "Not recorded"
        ],
        correctAnswer: 1,
        explanation: "As per revised AS-4, proposed dividend is not a liability but disclosed in notes to accounts.",
        difficulty: "hard"
      },
      {
        id: "q5",
        question: "Trade receivables are shown under:",
        options: [
          "Non-current assets",
          "Current assets",
          "Current liabilities",
          "Equity"
        ],
        correctAnswer: 1,
        explanation: "Trade receivables (debtors) are shown under Current Assets in the Balance Sheet.",
        difficulty: "easy"
      }
    ]
  },
  {
    id: "quiz-12-12",
    chapterId: "12-12",
    title: "Accounting Ratios",
    questions: [
      {
        id: "q1",
        question: "Current ratio is:",
        options: [
          "Fixed assets / Current liabilities",
          "Current assets / Current liabilities",
          "Quick assets / Current liabilities",
          "Total assets / Total liabilities"
        ],
        correctAnswer: 1,
        explanation: "Current ratio = Current Assets ÷ Current Liabilities, measuring short-term liquidity.",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Ideal current ratio is generally:",
        options: [
          "1:1",
          "2:1",
          "3:1",
          "0.5:1"
        ],
        correctAnswer: 1,
        explanation: "The generally accepted ideal current ratio is 2:1, indicating good short-term solvency.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Quick ratio excludes:",
        options: [
          "Cash",
          "Debtors",
          "Inventory and prepaid expenses",
          "Investments"
        ],
        correctAnswer: 2,
        explanation: "Quick ratio excludes inventory and prepaid expenses as they are less liquid.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Debt-equity ratio measures:",
        options: [
          "Liquidity",
          "Long-term solvency",
          "Profitability",
          "Efficiency"
        ],
        correctAnswer: 1,
        explanation: "Debt-equity ratio measures long-term solvency and financial leverage of the company.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "Higher inventory turnover indicates:",
        options: [
          "Slow sales",
          "Fast moving inventory",
          "Overstocking",
          "Low demand"
        ],
        correctAnswer: 1,
        explanation: "Higher inventory turnover ratio indicates faster selling of inventory and efficient inventory management.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "quiz-12-13",
    chapterId: "12-13",
    title: "Cash Flow Statement",
    questions: [
      {
        id: "q1",
        question: "Cash flow statement is prepared as per:",
        options: [
          "AS-1",
          "AS-3",
          "AS-5",
          "AS-10"
        ],
        correctAnswer: 1,
        explanation: "Cash Flow Statement is prepared as per Accounting Standard 3 (AS-3).",
        difficulty: "easy"
      },
      {
        id: "q2",
        question: "Operating activities include:",
        options: [
          "Purchase of fixed assets",
          "Issue of shares",
          "Cash from sales",
          "Repayment of loan"
        ],
        correctAnswer: 2,
        explanation: "Operating activities include cash flows from main business operations like sales and purchases.",
        difficulty: "easy"
      },
      {
        id: "q3",
        question: "Purchase of machinery is:",
        options: [
          "Operating activity",
          "Investing activity",
          "Financing activity",
          "Non-cash activity"
        ],
        correctAnswer: 1,
        explanation: "Purchase or sale of fixed assets is an investing activity.",
        difficulty: "medium"
      },
      {
        id: "q4",
        question: "Issue of debentures is:",
        options: [
          "Operating activity",
          "Investing activity",
          "Financing activity",
          "Not recorded"
        ],
        correctAnswer: 2,
        explanation: "Issue of shares/debentures and repayment of loans are financing activities.",
        difficulty: "medium"
      },
      {
        id: "q5",
        question: "In indirect method, depreciation is:",
        options: [
          "Deducted from net profit",
          "Added back to net profit",
          "Ignored",
          "Shown separately"
        ],
        correctAnswer: 1,
        explanation: "Depreciation is a non-cash expense, so it is added back to net profit under indirect method.",
        difficulty: "hard"
      }
    ]
  }
];
