export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: AnswerData[];
}

export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

const questions: QuestionData[] = [
  {
    questionId: 1,
    title: "Why should I learn TypeScript?",
    content: "Typescript skoskfdos",
    userName: "Bob",
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: "blbalba",
        userName: "Jane",
        created: new Date(),
      },
      {
        answerId: 2,
        content: "sssssalba",
        userName: "Fred",
        created: new Date(),
      },
    ],
  },
  {
    questionId: 2,
    title: "which state",
    content: "dksaodkoasdas",
    userName: "bob",
    created: new Date(),
    answers: [],
  },
];

export const getUnasweredQuestions = (): QuestionData[] => {
  return questions.filter((q) => q.answers.length === 0);
};
