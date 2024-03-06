export interface Answer {
  value: string;
  weights: string;
}

export interface Question {
  Question: string;
  Answers: Answer[];
}

export interface Quiz {
  Category: string;
  Title: string;
  Questions: Question[];
}
