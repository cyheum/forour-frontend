import * as Model from './model-interface';

export interface QuestionApi {
  getQuestionsAndAnswers(): Promise<Model.QuestionAndAnswer[]>;
}

export interface ResultsApi {
  getResults(personality: string): Promise<Model.Results>;
}

export interface AnswerApi {
  createAnswer(answers: Model.Answer[]): Promise<void>;
}

export interface MainApi {
  getAnniversaries(): Promise<Model.Anniversary[]>;
}
