interface question {
  question: string;
  options: string[];
  answer: number;
}

const quizData: question[] = [
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON eXtension",
      "JavaScript eXpress",
    ],
    answer: 0,
  },
  {
    question: "Which hook manages component state?",
    options: ["useFetch", "useState", "useClass", "useRouter"],
    answer: 1,
  },
  {
    question: "React components must start with:",
    options: [
      "Lowercase letters",
      "Uppercase letters",
      "Numbers",
      "Any character",
    ],
    answer: 1,
  },
];

export default quizData;
