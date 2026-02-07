import { Quiz } from "./quizzes";

export const class12Quizzes: Quiz[] = [
  {
    id: "quiz-12-1",
    chapterId: "12-1",
    title: "Not-for-Profit Organisations",
    questions: [
      { id: "q1", question: "Which account shows all cash receipts and payments?", options: ["Income and Expenditure Account", "Receipts and Payments Account", "Balance Sheet", "Trading Account"], correctAnswer: 1, explanation: "Receipts and Payments Account is a summary of all cash transactions.", difficulty: "easy" },
      { id: "q2", question: "Subscription received in advance is a:", options: ["Current Asset", "Current Liability", "Fixed Asset", "Revenue"], correctAnswer: 1, explanation: "Subscription received in advance is a current liability.", difficulty: "medium" },
      { id: "q3", question: "Life membership fee is treated as:", options: ["Revenue Receipt", "Capital Receipt", "Current Liability", "Fixed Asset"], correctAnswer: 1, explanation: "Life membership fee is a capital receipt as it is a one-time payment.", difficulty: "hard" },
      { id: "q4", question: "Excess of income over expenditure in NPO is called:", options: ["Profit", "Surplus", "Capital", "Reserve"], correctAnswer: 1, explanation: "In NPOs, excess of income over expenditure is called Surplus, not profit.", difficulty: "easy" },
      { id: "q5", question: "Entrance fees should be treated as:", options: ["Always revenue", "Always capital", "As per policy of organization", "Never recorded"], correctAnswer: 2, explanation: "Treatment depends on the policy of the organization.", difficulty: "medium" }
    ]
  },
  {
    id: "quiz-12-2",
    chapterId: "12-2",
    title: "Partnership: Basic Concepts",
    questions: [
      { id: "q1", question: "Maximum number of partners in a partnership firm is:", options: ["10", "20", "50", "Unlimited"], correctAnswer: 2, explanation: "As per Companies Act 2013, maximum partners is 50.", difficulty: "easy" },
      { id: "q2", question: "In absence of partnership deed, profit is shared:", options: ["In capital ratio", "Equally", "As decided by senior partner", "In time devoted ratio"], correctAnswer: 1, explanation: "Without a deed, profits are shared equally as per Partnership Act, 1932.", difficulty: "easy" },
      { id: "q3", question: "Interest on drawings is:", options: ["Credited to Capital Account", "Debited to Capital Account", "Shown in Balance Sheet", "Not recorded"], correctAnswer: 1, explanation: "Interest on drawings is debited to the partner's Capital Account.", difficulty: "medium" },
      { id: "q4", question: "Fixed Capital Account shows balance:", options: ["Always Debit", "Always Credit", "Debit or Credit", "Zero balance"], correctAnswer: 1, explanation: "Fixed Capital Account always shows a credit balance.", difficulty: "medium" },
      { id: "q5", question: "Which is NOT allowed in absence of partnership deed?", options: ["Interest on capital", "Equal profit sharing", "Interest on loan by partner", "Partner's salary"], correctAnswer: 0, explanation: "Interest on capital is not allowed without a partnership deed.", difficulty: "hard" }
    ]
  },
  {
    id: "quiz-12-3",
    chapterId: "12-3",
    title: "Goodwill: Nature and Valuation",
    questions: [
      { id: "q1", question: "Goodwill is an:", options: ["Tangible asset", "Intangible asset", "Current asset", "Fictitious asset"], correctAnswer: 1, explanation: "Goodwill is an intangible asset representing reputation and earning capacity.", difficulty: "easy" },
      { id: "q2", question: "Super profit is:", options: ["Total profit", "Actual profit minus normal profit", "Normal profit", "Average profit"], correctAnswer: 1, explanation: "Super profit is excess of actual profit over normal profit.", difficulty: "medium" },
      { id: "q3", question: "In capitalisation of super profit method, goodwill equals:", options: ["Super profit × Years of purchase", "Super profit / Normal rate of return", "Average profit × Years", "Capital employed × Rate"], correctAnswer: 0, explanation: "Goodwill = Super profit × Number of years of purchase.", difficulty: "hard" },
      { id: "q4", question: "Average profit method considers:", options: ["Only current year profit", "Profits of past years", "Future expected profits", "Industry average"], correctAnswer: 1, explanation: "Average profit method calculates goodwill based on past years' profits.", difficulty: "medium" },
      { id: "q5", question: "Which affects goodwill negatively?", options: ["Good location", "Skilled employees", "Poor management", "Brand reputation"], correctAnswer: 2, explanation: "Poor management negatively affects goodwill.", difficulty: "easy" }
    ]
  },
  {
    id: "quiz-12-4",
    chapterId: "12-4",
    title: "Change in Profit Sharing Ratio",
    questions: [
      { id: "q1", question: "Sacrificing ratio is calculated for:", options: ["Partner gaining share", "Partner sacrificing share", "Retiring partner", "New partner"], correctAnswer: 1, explanation: "Sacrificing ratio is for partners who give up part of their share.", difficulty: "easy" },
      { id: "q2", question: "Gaining ratio = New ratio minus:", options: ["Sacrificing ratio", "Old ratio", "Capital ratio", "Profit ratio"], correctAnswer: 1, explanation: "Gaining ratio = New ratio - Old ratio for each partner.", difficulty: "medium" },
      { id: "q3", question: "Revaluation account is prepared to record:", options: ["Cash transactions", "Change in asset/liability values", "Daily sales", "Partner drawings"], correctAnswer: 1, explanation: "Revaluation account records changes in values of assets and liabilities.", difficulty: "medium" },
      { id: "q4", question: "General reserve is distributed in:", options: ["New ratio", "Old ratio", "Equal ratio", "Capital ratio"], correctAnswer: 1, explanation: "General reserve is distributed in old profit sharing ratio.", difficulty: "hard" },
      { id: "q5", question: "Gaining partner compensates sacrificing partner for:", options: ["Capital contribution", "Goodwill share", "Loan given", "Salary"], correctAnswer: 1, explanation: "Gaining partner pays for the goodwill share they are acquiring.", difficulty: "medium" }
    ]
  },
  {
    id: "quiz-12-5",
    chapterId: "12-5",
    title: "Admission of a Partner",
    questions: [
      { id: "q1", question: "New partner is admitted for:", options: ["Fresh capital only", "Capital and share in profits", "Managing the business", "Loan to firm"], correctAnswer: 1, explanation: "A new partner is admitted for capital contribution and share in profits.", difficulty: "easy" },
      { id: "q2", question: "Sacrificing ratio at admission is borne by:", options: ["New partner", "Old partners", "All partners equally", "Creditors"], correctAnswer: 1, explanation: "Old partners sacrifice from their share for the new partner.", difficulty: "medium" },
      { id: "q3", question: "Premium for goodwill brought by new partner is shared by old partners in:", options: ["Old ratio", "Sacrificing ratio", "Capital ratio", "Equal ratio"], correctAnswer: 1, explanation: "Goodwill premium is shared in sacrificing ratio.", difficulty: "hard" },
      { id: "q4", question: "Hidden goodwill is calculated when:", options: ["Goodwill is mentioned", "Goodwill is not mentioned but new partner pays premium", "No premium is paid", "Only capital is brought"], correctAnswer: 1, explanation: "Hidden goodwill is inferred when new partner pays without explicit goodwill amount.", difficulty: "hard" },
      { id: "q5", question: "Revaluation profit is shared in:", options: ["New ratio", "Old ratio", "Sacrificing ratio", "Capital ratio"], correctAnswer: 1, explanation: "Revaluation profit/loss is shared among old partners in old ratio.", difficulty: "medium" }
    ]
  },
  {
    id: "quiz-12-6",
    chapterId: "12-6",
    title: "Retirement of a Partner",
    questions: [
      { id: "q1", question: "On retirement, gaining ratio is calculated for:", options: ["Retiring partner", "Continuing partners", "All partners", "Creditors"], correctAnswer: 1, explanation: "Gaining ratio is for continuing partners who gain from retiring partner's share.", difficulty: "easy" },
      { id: "q2", question: "Retiring partner's share of goodwill is debited to:", options: ["Goodwill A/c", "Continuing partners in gaining ratio", "Cash A/c", "Revaluation A/c"], correctAnswer: 1, explanation: "Goodwill share is debited to continuing partners in gaining ratio.", difficulty: "hard" },
      { id: "q3", question: "Amount due to retiring partner is transferred to:", options: ["Cash Account", "Retiring Partner's Loan Account", "Capital Account", "P&L Account"], correctAnswer: 1, explanation: "Amount due but not paid is transferred to Retiring Partner's Loan Account.", difficulty: "medium" },
      { id: "q4", question: "Interest on amount due to retiring partner is:", options: ["Charged to P&L A/c", "Not given", "Capitalized", "Added to goodwill"], correctAnswer: 0, explanation: "Interest on retiring partner's dues is charged to P&L Account.", difficulty: "medium" },
      { id: "q5", question: "Accumulated profits are shared with retiring partner in:", options: ["New ratio", "Old ratio", "Gaining ratio", "Equal ratio"], correctAnswer: 1, explanation: "Accumulated profits are shared in old ratio including retiring partner.", difficulty: "easy" }
    ]
  },
  {
    id: "quiz-12-7",
    chapterId: "12-7",
    title: "Death of a Partner",
    questions: [
      { id: "q1", question: "Death of a partner results in:", options: ["Dissolution of firm", "Reconstitution of firm", "Liquidation", "No effect"], correctAnswer: 1, explanation: "Death results in reconstitution of the firm with remaining partners.", difficulty: "easy" },
      { id: "q2", question: "Deceased partner's share of profit till death is calculated on:", options: ["Last year's profit", "Average profit", "Time basis or turnover basis", "Capital ratio"], correctAnswer: 2, explanation: "Share of profit till death can be on time basis or turnover basis.", difficulty: "medium" },
      { id: "q3", question: "Joint Life Policy amount on death is:", options: ["Distributed to all partners", "Given to deceased partner's legal representatives", "Credited to remaining partners", "Transferred to reserve"], correctAnswer: 1, explanation: "JLP amount is credited to deceased partner's capital account.", difficulty: "hard" },
      { id: "q4", question: "Amount due to deceased partner is paid to:", options: ["Partner's family", "Legal representatives/executors", "Government", "Other partners"], correctAnswer: 1, explanation: "All dues are paid to legal representatives or executors.", difficulty: "easy" },
      { id: "q5", question: "Treatment of goodwill on death is similar to:", options: ["Admission", "Retirement", "Dissolution", "None of these"], correctAnswer: 1, explanation: "Goodwill treatment on death is similar to retirement.", difficulty: "medium" }
    ]
  },
  {
    id: "quiz-12-8",
    chapterId: "12-8",
    title: "Dissolution of Partnership Firm",
    questions: [
      { id: "q1", question: "Dissolution means:", options: ["Change in partnership", "Complete closure of business", "Admission of partner", "Change in profit ratio"], correctAnswer: 1, explanation: "Dissolution means complete closure of business.", difficulty: "easy" },
      { id: "q2", question: "Realisation account is prepared to:", options: ["Record daily transactions", "Calculate profit/loss on dissolution", "Prepare balance sheet", "Record partner drawings"], correctAnswer: 1, explanation: "Realisation account calculates profit or loss on dissolution.", difficulty: "easy" },
      { id: "q3", question: "Partner taking over asset at agreed value:", options: ["Debits Realisation A/c", "Credits Realisation A/c", "Debits own Capital A/c", "Both B and C"], correctAnswer: 3, explanation: "Cr. Realisation A/c and Dr. Partner's Capital A/c with agreed value.", difficulty: "hard" },
      { id: "q4", question: "Order of payment on dissolution is:", options: ["Partners first, then creditors", "Outside liabilities first, then partners' dues", "Equal distribution", "As per partnership deed only"], correctAnswer: 1, explanation: "Outside creditors are paid first, then partners' loans, then capital.", difficulty: "medium" },
      { id: "q5", question: "Unrecorded asset when sold:", options: ["Debited to Realisation A/c", "Credited to Realisation A/c", "Not recorded", "Debited to Partners"], correctAnswer: 1, explanation: "Sale proceeds of unrecorded assets are credited to Realisation account.", difficulty: "medium" }
    ]
  },
  {
    id: "quiz-12-9",
    chapterId: "12-9",
    title: "Accounting for Share Capital",
    questions: [
      { id: "q1", question: "Minimum subscription is:", options: ["100% of issued capital", "90% of issued capital", "Amount stated in prospectus", "50% of authorized capital"], correctAnswer: 2, explanation: "Minimum subscription is the minimum amount as stated in prospectus.", difficulty: "medium" },
      { id: "q2", question: "Share premium is:", options: ["Extra amount above face value", "Discount on shares", "Dividend payment", "Loss on shares"], correctAnswer: 0, explanation: "Share premium is excess amount received over face value.", difficulty: "easy" },
      { id: "q3", question: "On forfeiture of shares, share capital is debited with:", options: ["Face value", "Called-up amount", "Paid-up amount", "Market value"], correctAnswer: 1, explanation: "Share Capital A/c is debited with called-up amount on forfeiture.", difficulty: "hard" },
      { id: "q4", question: "Forfeited shares can be reissued at:", options: ["Only at par", "Only at premium", "At discount up to forfeited amount", "Any price"], correctAnswer: 2, explanation: "Discount on reissue cannot exceed the forfeited amount.", difficulty: "hard" },
      { id: "q5", question: "Calls in arrears means:", options: ["Extra amount received", "Amount not received though due", "Premium on shares", "Advance against calls"], correctAnswer: 1, explanation: "Calls in arrears is amount due but not yet received from shareholders.", difficulty: "easy" }
    ]
  },
  {
    id: "quiz-12-10",
    chapterId: "12-10",
    title: "Issue and Redemption of Debentures",
    questions: [
      { id: "q1", question: "Debenture holders are:", options: ["Owners of company", "Creditors of company", "Employees", "Customers"], correctAnswer: 1, explanation: "Debenture holders are creditors who lent money to the company.", difficulty: "easy" },
      { id: "q2", question: "Interest on debentures is:", options: ["Appropriation of profit", "Charge against profit", "Distribution of profit", "Capital expenditure"], correctAnswer: 1, explanation: "Debenture interest is a charge against profit, payable regardless of profit.", difficulty: "medium" },
      { id: "q3", question: "Debentures issued as collateral security are:", options: ["Recorded in books", "Not recorded, only shown by note", "Cancelled immediately", "Converted to shares"], correctAnswer: 1, explanation: "Collateral debentures are disclosed by note only.", difficulty: "hard" },
      { id: "q4", question: "DRR stands for:", options: ["Debenture Reserve Ratio", "Debenture Redemption Reserve", "Debenture Return Reserve", "Debenture Revenue Reserve"], correctAnswer: 1, explanation: "DRR is Debenture Redemption Reserve for redemption of debentures.", difficulty: "easy" },
      { id: "q5", question: "Loss on issue of debentures is:", options: ["Revenue loss", "Capital loss", "Fictitious asset", "Current asset"], correctAnswer: 2, explanation: "Loss on issue (discount) is a fictitious asset written off over debenture life.", difficulty: "medium" }
    ]
  },
  {
    id: "quiz-12-11",
    chapterId: "12-11",
    title: "Financial Statements of a Company",
    questions: [
      { id: "q1", question: "Company financial statements are prepared as per:", options: ["Partnership Act", "Schedule III of Companies Act", "Income Tax Act", "SEBI Guidelines"], correctAnswer: 1, explanation: "Prepared according to Schedule III of Companies Act 2013.", difficulty: "easy" },
      { id: "q2", question: "Statement of Profit and Loss shows:", options: ["Financial position", "Revenue and expenses for the year", "Cash flows", "Changes in equity"], correctAnswer: 1, explanation: "Shows all revenues and expenses to determine profit/loss.", difficulty: "easy" },
      { id: "q3", question: "Preliminary expenses are shown under:", options: ["Current assets", "Other non-current assets", "Current liabilities", "Reserves"], correctAnswer: 1, explanation: "Preliminary expenses are shown under Other Non-current Assets.", difficulty: "medium" },
      { id: "q4", question: "Proposed dividend is:", options: ["Shown as current liability", "Disclosed in notes only", "Shown as reserve", "Not recorded"], correctAnswer: 1, explanation: "As per revised AS-4, proposed dividend is disclosed in notes only.", difficulty: "hard" },
      { id: "q5", question: "Trade receivables are shown under:", options: ["Non-current assets", "Current assets", "Current liabilities", "Equity"], correctAnswer: 1, explanation: "Trade receivables (debtors) are shown under Current Assets.", difficulty: "easy" }
    ]
  },
  {
    id: "quiz-12-12",
    chapterId: "12-12",
    title: "Accounting Ratios",
    questions: [
      { id: "q1", question: "Current ratio is:", options: ["Fixed assets / Current liabilities", "Current assets / Current liabilities", "Quick assets / Current liabilities", "Total assets / Total liabilities"], correctAnswer: 1, explanation: "Current ratio = Current Assets ÷ Current Liabilities.", difficulty: "easy" },
      { id: "q2", question: "Ideal current ratio is generally:", options: ["1:1", "2:1", "3:1", "0.5:1"], correctAnswer: 1, explanation: "Generally accepted ideal current ratio is 2:1.", difficulty: "easy" },
      { id: "q3", question: "Quick ratio excludes:", options: ["Cash", "Debtors", "Inventory and prepaid expenses", "Investments"], correctAnswer: 2, explanation: "Quick ratio excludes inventory and prepaid expenses as less liquid.", difficulty: "medium" },
      { id: "q4", question: "Debt-equity ratio measures:", options: ["Liquidity", "Long-term solvency", "Profitability", "Efficiency"], correctAnswer: 1, explanation: "Debt-equity ratio measures long-term solvency and financial leverage.", difficulty: "medium" },
      { id: "q5", question: "Higher inventory turnover indicates:", options: ["Slow sales", "Fast moving inventory", "Overstocking", "Low demand"], correctAnswer: 1, explanation: "Higher inventory turnover indicates faster selling and efficient management.", difficulty: "hard" }
    ]
  },
  {
    id: "quiz-12-13",
    chapterId: "12-13",
    title: "Cash Flow Statement",
    questions: [
      { id: "q1", question: "Cash flow statement is prepared as per:", options: ["AS-1", "AS-3", "AS-5", "AS-10"], correctAnswer: 1, explanation: "Cash Flow Statement is prepared as per AS-3.", difficulty: "easy" },
      { id: "q2", question: "Operating activities include:", options: ["Purchase of fixed assets", "Issue of shares", "Cash from sales", "Repayment of loan"], correctAnswer: 2, explanation: "Operating activities include cash flows from main business operations.", difficulty: "easy" },
      { id: "q3", question: "Purchase of machinery is:", options: ["Operating activity", "Investing activity", "Financing activity", "Non-cash activity"], correctAnswer: 1, explanation: "Purchase or sale of fixed assets is an investing activity.", difficulty: "medium" },
      { id: "q4", question: "Issue of debentures is:", options: ["Operating activity", "Investing activity", "Financing activity", "Not recorded"], correctAnswer: 2, explanation: "Issue of shares/debentures are financing activities.", difficulty: "medium" },
      { id: "q5", question: "In indirect method, depreciation is:", options: ["Deducted from net profit", "Added back to net profit", "Ignored", "Shown separately"], correctAnswer: 1, explanation: "Depreciation is a non-cash expense, added back under indirect method.", difficulty: "hard" }
    ]
  }
];
