import { GetQuesionController } from '..';
import { QuestionApi } from 'app/model';
import * as Entity from 'app/model/model-interface';
import { question } from 'app/model/data';

export default class GetQuesionControllerImpl implements GetQuesionController {
  private questionApi: QuestionApi;

  constructor(questionApi: QuestionApi) {
    this.questionApi = questionApi;
  }

  execute(): Promise<Entity.Question> {
    //API 테스트 하는 방법 알아야 함
    // return question

    return this.questionApi.getQuestion();
  }
}
