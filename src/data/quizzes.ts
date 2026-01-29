export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  chapterId: string;
  title: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    id: "quiz-11-1",
    chapterId: "11-1",
    title: "Introduction to Accounting Quiz",
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
        explanation: "The primary objective of accounting is to maintain systematic records of business transactions."
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
        explanation: "Social Accounting is not considered a main branch of accounting. The main branches are Financial, Cost, and Management Accounting."
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
        explanation: "Luca Pacioli, an Italian mathematician, is known as the Father of Accounting for documenting the double-entry bookkeeping system."
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
        explanation: "The fundamental accounting equation is Assets = Capital + Liabilities, which forms the basis of double-entry bookkeeping."
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
        explanation: "Neutrality means accounting information should be free from bias and present a fair view without favoring any particular party."
      }
    ]
  },
  {
    id: "quiz-11-2",
    chapterId: "11-2",
    title: "Theory Base of Accounting Quiz",
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
        explanation: "The Going Concern concept assumes that the business will continue its operations indefinitely and has no intention to close down."
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
        explanation: "The Cost Concept requires that assets be recorded at their historical cost, i.e., the actual amount paid to acquire them."
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
        explanation: "The standard accounting period is 12 months, which allows for annual reporting and comparison of financial performance."
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
        explanation: "Dual aspect concept means every transaction has two aspects - debit and credit - which are equal and form the basis of double-entry system."
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
        explanation: "GAAP stands for Generally Accepted Accounting Principles, which are the standard guidelines for financial accounting."
      }
    ]
  },
  {
    id: "quiz-12-1",
    chapterId: "12-1",
    title: "Not-for-Profit Organisations Quiz",
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
        explanation: "Receipts and Payments Account is a summary of all cash transactions, showing both capital and revenue receipts and payments."
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
        explanation: "Subscription received in advance is a current liability as it represents money received for services not yet provided."
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
        explanation: "Life membership fee is a capital receipt as it is a one-time payment that provides membership for life."
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
        explanation: "In Not-for-Profit Organizations, excess of income over expenditure is called Surplus, not profit, as they don't operate for profit motive."
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
        explanation: "Treatment of entrance fees depends on the policy of the organization - it can be treated as revenue or capitalized based on the amount."
      }
    ]
  },
  {
    id: "quiz-12-2",
    chapterId: "12-2",
    title: "Partnership Basics Quiz",
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
        explanation: "As per the Companies Act 2013, maximum number of partners in a partnership firm is 50."
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
        explanation: "In the absence of a partnership deed, profits are shared equally among all partners as per the Partnership Act, 1932."
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
        explanation: "Interest on drawings is debited to the partner's Capital Account as it is a charge against the partner."
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
        explanation: "Fixed Capital Account always shows a credit balance representing the partner's investment in the firm."
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
        explanation: "Interest on capital is not allowed in the absence of a partnership deed, though interest on loan by partner at 6% p.a. is allowed."
      }
    ]
  }
];
