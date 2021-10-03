import { ResultsController } from '..';
import { ResultsApi } from 'app/model';
import * as Model from 'app/model/model-interface';

export default class ResultsControllerImpl implements ResultsController {
  private resultApi: ResultsApi;

  constructor(resultApi: ResultsApi) {
    this.resultApi = resultApi;
  }

  getResults(personality:string): Promise<Model.Results> {
 
    return this.resultApi.getResults(personality);
  }
}
