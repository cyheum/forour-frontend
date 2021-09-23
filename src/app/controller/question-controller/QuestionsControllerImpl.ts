import { GetQuesionsController } from '..';
import { QuestionApi } from 'app/model';
import * as Entity from 'app/model/model-interface';

export default class GetQuesionsControllerImpl implements GetQuesionsController {
  private questionApi: QuestionApi;

  constructor(questionApi: QuestionApi) {
    this.questionApi = questionApi;
  }

  getQuestionsAndAnswers(): Promise<Entity.QuestionAndAnswer[]> {
 
    return this.questionApi.getQuestionsAndAnswers();
  }
}
