import * as Model from 'app/model/model-interface';

export interface QuesionsController {
  getQuestionsAndAnswers(): Promise<Model.QuestionAndAnswer[]>;
}

export interface ResultsController {
  getResults(personality: string): Promise<Model.Results>;
}

export interface AnswerController {
  createAnswers(answers: Model.Answer[]): Promise<void>;
}

export interface MainController {
  getAnniversaries(): Promise<Model.Anniversary[]>;
}
