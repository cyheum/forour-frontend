import { AnswerController } from '..';
import { AnswerApi } from 'app/model';
import * as Model from 'app/model/model-interface';

export default class AnswerControllerImpl implements AnswerController {
  private answerApi: AnswerApi;

  constructor(answerApi: AnswerApi) {
    this.answerApi = answerApi;
  }

  createAnswers(answers:Model.Answer[] ): Promise<void> {
 
    return this.answerApi.createAnswer(answers);
  }
}
