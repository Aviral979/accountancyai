export interface Chapter {
  id: string;
  number: number;
  title: string;
  class: 11 | 12;
  isFree: boolean;
  topics: string[];
  description: string;
  pdfUrl?: string;
}

export const chapters: Chapter[] = [
  // Class 11 Chapters
  {
    id: "11-1",
    number: 1,
    title: "Introduction to Accounting",
    class: 11,
    isFree: true,
    description: "Learn the fundamental concepts, objectives, and importance of accounting in business.",
    topics: [
      "Meaning and Definition of Accounting",
      "Objectives of Accounting",
      "Role of Accounting in Business",
      "Branches of Accounting",
      "Qualitative Characteristics of Accounting Information"
    ]
  },
  {
    id: "11-2",
    number: 2,
    title: "Theory Base of Accounting",
    class: 11,
    isFree: true,
    description: "Understand the theoretical framework including concepts, principles, and standards.",
    topics: [
      "GAAP (Generally Accepted Accounting Principles)",
      "Basic Accounting Concepts",
      "Accounting Standards",
      "Double Entry System",
      "Accounting Equation"
    ]
  },
  {
    id: "11-3",
    number: 3,
    title: "Recording of Transactions – I",
    class: 11,
    isFree: false,
    description: "Master the basics of journal entries and source documents.",
    topics: [
      "Source Documents and Vouchers",
      "Accounting Equation",
      "Rules of Debit and Credit",
      "Journal Entries",
      "Books of Original Entry"
    ]
  },
  {
    id: "11-4",
    number: 4,
    title: "Recording of Transactions – II",
    class: 11,
    isFree: false,
    description: "Learn about special purpose books and subsidiary books.",
    topics: [
      "Cash Book",
      "Purchase Book",
      "Sales Book",
      "Purchase Returns Book",
      "Sales Returns Book"
    ]
  },
  {
    id: "11-5",
    number: 5,
    title: "Bank Reconciliation Statement",
    class: 11,
    isFree: false,
    description: "Prepare bank reconciliation statements and understand timing differences.",
    topics: [
      "Need for Reconciliation",
      "Causes of Difference",
      "Preparation of BRS",
      "Adjusted Cash Book",
      "Practical Problems"
    ]
  },
  {
    id: "11-6",
    number: 6,
    title: "Trial Balance and Rectification of Errors",
    class: 11,
    isFree: false,
    description: "Prepare trial balance and rectify accounting errors.",
    topics: [
      "Meaning and Objectives of Trial Balance",
      "Methods of Preparation",
      "Types of Errors",
      "Rectification of Errors",
      "Suspense Account"
    ]
  },
  {
    id: "11-7",
    number: 7,
    title: "Depreciation, Provisions and Reserves",
    class: 11,
    isFree: false,
    description: "Understand depreciation methods and accounting for provisions.",
    topics: [
      "Meaning and Causes of Depreciation",
      "Methods of Depreciation",
      "Provisions vs Reserves",
      "Types of Reserves",
      "Accounting Treatment"
    ]
  },
  {
    id: "11-8",
    number: 8,
    title: "Bills of Exchange",
    class: 11,
    isFree: false,
    description: "Learn about negotiable instruments and their accounting treatment.",
    topics: [
      "Meaning and Features",
      "Types of Bills",
      "Discounting and Endorsement",
      "Dishonour and Renewal",
      "Accounting Entries"
    ]
  },
  {
    id: "11-9",
    number: 9,
    title: "Financial Statements – I",
    class: 11,
    isFree: false,
    description: "Prepare Trading and Profit & Loss Account for sole proprietorship.",
    topics: [
      "Trading Account",
      "Profit and Loss Account",
      "Adjustments",
      "Closing Entries",
      "Preparation of Statements"
    ]
  },
  {
    id: "11-10",
    number: 10,
    title: "Financial Statements – II",
    class: 11,
    isFree: false,
    description: "Prepare Balance Sheet with adjustments.",
    topics: [
      "Balance Sheet",
      "Adjustments in Final Accounts",
      "Closing Stock",
      "Outstanding and Prepaid Expenses",
      "Comprehensive Problems"
    ]
  },
  // Class 12 Chapters
  {
    id: "12-1",
    number: 1,
    title: "Accounting for Not-for-Profit Organisations",
    class: 12,
    isFree: true,
    pdfUrl: "/notes/class-12-chapter-1.pdf",
    description: "Learn accounting for NGOs, clubs, and charitable organizations.",
    topics: [
      "Features of NPO",
      "Receipts and Payments Account",
      "Income and Expenditure Account",
      "Balance Sheet",
      "Practical Problems"
    ]
  },
  {
    id: "12-2",
    number: 2,
    title: "Accounting for Partnership: Basic Concepts",
    class: 12,
    isFree: true,
    pdfUrl: "/notes/class-12-chapter-2.pdf",
    description: "Understand partnership fundamentals and profit distribution.",
    topics: [
      "Nature of Partnership",
      "Partnership Deed",
      "Fixed vs Fluctuating Capital",
      "Distribution of Profits",
      "Guarantee of Profits"
    ]
  },
  {
    id: "12-3",
    number: 3,
    title: "Goodwill: Nature and Valuation",
    class: 12,
    isFree: false,
    description: "Learn about goodwill and its various valuation methods.",
    topics: [
      "Meaning and Features",
      "Factors Affecting Goodwill",
      "Methods of Valuation",
      "Average Profit Method",
      "Super Profit Method"
    ]
  },
  {
    id: "12-4",
    number: 4,
    title: "Change in Profit Sharing Ratio",
    class: 12,
    isFree: false,
    description: "Account for changes in profit sharing among partners.",
    topics: [
      "Reasons for Change",
      "Sacrificing Ratio",
      "Gaining Ratio",
      "Treatment of Goodwill",
      "Revaluation of Assets"
    ]
  },
  {
    id: "12-5",
    number: 5,
    title: "Admission of a Partner",
    class: 12,
    isFree: false,
    description: "Learn accounting treatment when a new partner joins.",
    topics: [
      "New Profit Sharing Ratio",
      "Sacrificing Ratio",
      "Treatment of Goodwill",
      "Revaluation Account",
      "Capital Adjustments"
    ]
  },
  {
    id: "12-6",
    number: 6,
    title: "Retirement and Death of a Partner",
    class: 12,
    isFree: false,
    description: "Account for partner retirement and death scenarios.",
    topics: [
      "Gaining Ratio",
      "Treatment of Goodwill",
      "Revaluation of Assets",
      "Settlement of Amount Due",
      "Death of Partner"
    ]
  },
  {
    id: "12-7",
    number: 7,
    title: "Dissolution of Partnership Firm",
    class: 12,
    isFree: false,
    description: "Learn the process and accounting for firm dissolution.",
    topics: [
      "Modes of Dissolution",
      "Settlement of Accounts",
      "Realisation Account",
      "Treatment of Unrecorded Items",
      "Practical Problems"
    ]
  },
  {
    id: "12-8",
    number: 8,
    title: "Accounting for Share Capital",
    class: 12,
    isFree: false,
    description: "Understand company formation and share capital accounting.",
    topics: [
      "Types of Companies",
      "Share Capital",
      "Issue of Shares",
      "Oversubscription",
      "Forfeiture and Reissue"
    ]
  },
  {
    id: "12-9",
    number: 9,
    title: "Issue and Redemption of Debentures",
    class: 12,
    isFree: false,
    description: "Learn about debentures and their accounting treatment.",
    topics: [
      "Types of Debentures",
      "Issue of Debentures",
      "Interest on Debentures",
      "Redemption Methods",
      "Writing off Discount"
    ]
  },
  {
    id: "12-10",
    number: 10,
    title: "Financial Statement Analysis",
    class: 12,
    isFree: false,
    description: "Analyze financial statements using various tools.",
    topics: [
      "Tools of Analysis",
      "Comparative Statements",
      "Common Size Statements",
      "Trend Analysis",
      "Interpretation"
    ]
  }
];
