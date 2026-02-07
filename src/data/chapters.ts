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
    pdfUrl: "/notes/class-11-chapter-1.pdf",
    description: "Learn the fundamental concepts, objectives, and importance of accounting in business.",
    topics: ["Meaning and Definition of Accounting", "Objectives of Accounting", "Role of Accounting in Business", "Branches of Accounting", "Qualitative Characteristics of Accounting Information"]
  },
  {
    id: "11-2",
    number: 2,
    title: "Basic Accounting Terms",
    class: 11,
    isFree: true,
    pdfUrl: "/notes/class-11-chapter-2.pdf",
    description: "Understand the basic terminology used in accounting.",
    topics: ["Business Transaction", "Assets and Liabilities", "Capital and Revenue", "Debtors and Creditors", "Goods and Stock"]
  },
  {
    id: "11-3",
    number: 3,
    title: "Theory Base of Accounting, Accounting Standards and Ind-AS",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-3.pdf",
    description: "Understand the theoretical framework including concepts, principles, and standards.",
    topics: ["GAAP", "Basic Accounting Concepts", "Accounting Standards", "Indian Accounting Standards (Ind-AS)", "Accounting Principles"]
  },
  {
    id: "11-4",
    number: 4,
    title: "Bases of Accounting",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-4.pdf",
    description: "Learn about cash basis and accrual basis of accounting.",
    topics: ["Cash Basis of Accounting", "Accrual Basis of Accounting", "Difference Between Cash and Accrual", "Advantages and Disadvantages", "Applicability"]
  },
  {
    id: "11-5",
    number: 5,
    title: "Accounting Equation",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-5.pdf",
    description: "Understand the fundamental accounting equation and its applications.",
    topics: ["Meaning of Accounting Equation", "Assets = Liabilities + Capital", "Effect of Transactions on Equation", "Preparation of Accounting Equation", "Practical Problems"]
  },
  {
    id: "11-6",
    number: 6,
    title: "Accounting Procedures – Rules of Debit and Credit",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-6.pdf",
    description: "Master the rules of debit and credit for different types of accounts.",
    topics: ["Types of Accounts", "Rules of Debit and Credit", "Modern Approach", "Traditional Approach", "Practical Application"]
  },
  {
    id: "11-7",
    number: 7,
    title: "Origin of Transactions – Source Documents and Vouchers",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-7.pdf",
    description: "Learn about source documents and preparation of vouchers.",
    topics: ["Source Documents", "Types of Vouchers", "Preparation of Vouchers", "Invoice and Receipt", "Debit and Credit Notes"]
  },
  {
    id: "11-8",
    number: 8,
    title: "Journal",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-8.pdf",
    description: "Learn about journal as the book of original entry.",
    topics: ["Meaning of Journal", "Format of Journal", "Simple and Compound Entries", "Opening Entry", "Practical Problems"]
  },
  {
    id: "11-9",
    number: 9,
    title: "Ledger",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-9.pdf",
    description: "Understand ledger posting and balancing of accounts.",
    topics: ["Meaning of Ledger", "Format of Ledger", "Posting from Journal", "Balancing of Accounts", "Practical Problems"]
  },
  {
    id: "11-10",
    number: 10,
    title: "Special Purpose Books I – Cash Book",
    class: 11,
    isFree: false,
    description: "Learn about different types of cash books.",
    topics: ["Simple Cash Book", "Double Column Cash Book", "Triple Column Cash Book", "Petty Cash Book", "Practical Problems"]
  },
  {
    id: "11-11",
    number: 11,
    title: "Special Purpose Books II – Other Books",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-11.pdf",
    description: "Learn about purchase book, sales book, and other subsidiary books.",
    topics: ["Purchase Book", "Sales Book", "Purchase Returns Book", "Sales Returns Book", "Bills of Exchange Books"]
  },
  {
    id: "11-12",
    number: 12,
    title: "Accounting of Goods and Services Tax (GST)",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-12.pdf",
    description: "Understand GST accounting and its treatment in books.",
    topics: ["Introduction to GST", "CGST, SGST and IGST", "Input Tax Credit", "GST Accounting Entries", "Practical Problems"]
  },
  {
    id: "11-13",
    number: 13,
    title: "Bank Reconciliation Statement",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-13.pdf",
    description: "Prepare bank reconciliation statements and understand timing differences.",
    topics: ["Need for Reconciliation", "Causes of Difference", "Preparation of BRS", "Adjusted Cash Book", "Practical Problems"]
  },
  {
    id: "11-14",
    number: 14,
    title: "Trial Balance",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-14.pdf",
    description: "Prepare trial balance and understand its objectives.",
    topics: ["Meaning and Objectives", "Methods of Preparation", "Significance of Agreement", "Limitations of Trial Balance", "Practical Problems"]
  },
  {
    id: "11-15",
    number: 15,
    title: "Depreciation",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-15.pdf",
    description: "Understand depreciation methods and their accounting treatment.",
    topics: ["Meaning and Causes", "Straight Line Method", "Written Down Value Method", "Comparison of Methods", "Accounting Treatment"]
  },
  {
    id: "11-16",
    number: 16,
    title: "Provisions and Reserves",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-16.pdf",
    description: "Learn the difference between provisions and reserves.",
    topics: ["Meaning of Provisions", "Meaning of Reserves", "Types of Reserves", "Difference Between Provisions and Reserves", "Accounting Treatment"]
  },
  {
    id: "11-17",
    number: 17,
    title: "Rectification of Errors",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-17.pdf",
    description: "Learn to identify and rectify accounting errors.",
    topics: ["Types of Errors", "Errors Affecting Trial Balance", "Errors Not Affecting Trial Balance", "Suspense Account", "Rectification Entries"]
  },
  {
    id: "11-18",
    number: 18,
    title: "Financial Statements of Sole Proprietorship",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-18.pdf",
    description: "Prepare Trading, Profit & Loss Account and Balance Sheet.",
    topics: ["Trading Account", "Profit and Loss Account", "Balance Sheet", "Closing Entries", "Practical Problems"]
  },
  {
    id: "11-19",
    number: 19,
    title: "Adjustments in Preparation of Financial Statements",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-19.pdf",
    description: "Learn about adjustments in final accounts preparation.",
    topics: ["Closing Stock", "Outstanding Expenses", "Prepaid Expenses", "Accrued Income", "Comprehensive Problems"]
  },
  {
    id: "11-20",
    number: 20,
    title: "Accounts from Incomplete Records – Single Entry System",
    class: 11,
    isFree: false,
    pdfUrl: "/notes/class-11-chapter-20.pdf",
    description: "Understand single entry system and preparation of accounts from incomplete records.",
    topics: ["Meaning of Single Entry", "Difference from Double Entry", "Statement of Affairs", "Conversion Method", "Practical Problems"]
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
    pdfUrl: "/notes/class-12-chapter-3.pdf",
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
    pdfUrl: "/notes/class-12-chapter-4.pdf",
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
    pdfUrl: "/notes/class-12-chapter-5.pdf",
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
    title: "Retirement of a Partner",
    class: 12,
    isFree: false,
    pdfUrl: "/notes/class-12-chapter-6.pdf",
    description: "Account for partner retirement scenarios.",
    topics: [
      "Gaining Ratio",
      "Treatment of Goodwill",
      "Revaluation of Assets",
      "Settlement of Amount Due",
      "Adjustment of Capital"
    ]
  },
  {
    id: "12-7",
    number: 7,
    title: "Death of a Partner",
    class: 12,
    isFree: false,
    pdfUrl: "/notes/class-12-chapter-7.pdf",
    description: "Account for death of a partner and settlement of dues.",
    topics: [
      "Calculation of Deceased Partner's Share",
      "Treatment of Goodwill",
      "Share of Profit till Death",
      "Settlement with Legal Representatives",
      "Joint Life Policy"
    ]
  },
  {
    id: "12-8",
    number: 8,
    title: "Dissolution of Partnership Firm",
    class: 12,
    isFree: false,
    pdfUrl: "/notes/class-12-chapter-8.pdf",
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
    id: "12-9",
    number: 9,
    title: "Accounting for Share Capital",
    class: 12,
    isFree: false,
    pdfUrl: "/notes/class-12-chapter-9.pdf",
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
    id: "12-10",
    number: 10,
    title: "Issue and Redemption of Debentures",
    class: 12,
    isFree: false,
    pdfUrl: "/notes/class-12-chapter-10.pdf",
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
    id: "12-11",
    number: 11,
    title: "Financial Statements of a Company",
    class: 12,
    isFree: false,
    pdfUrl: "/notes/class-12-chapter-11.pdf",
    description: "Prepare and understand company financial statements.",
    topics: [
      "Statement of Profit and Loss",
      "Balance Sheet Format",
      "Schedule III Requirements",
      "Notes to Accounts",
      "Practical Problems"
    ]
  },
  {
    id: "12-12",
    number: 12,
    title: "Accounting Ratios",
    class: 12,
    isFree: false,
    description: "Analyze financial statements using various ratios.",
    topics: [
      "Liquidity Ratios",
      "Solvency Ratios",
      "Activity Ratios",
      "Profitability Ratios",
      "Interpretation of Ratios"
    ]
  },
  {
    id: "12-13",
    number: 13,
    title: "Cash Flow Statement",
    class: 12,
    isFree: false,
    description: "Prepare cash flow statements as per AS-3.",
    topics: [
      "Objectives and Benefits",
      "Operating Activities",
      "Investing Activities",
      "Financing Activities",
      "Preparation of Cash Flow Statement"
    ]
  }
];
