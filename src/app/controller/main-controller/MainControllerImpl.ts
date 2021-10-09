import { MainController } from '..';
import { MainApi } from 'app/model';
import * as Model from 'app/model/model-interface';

export default class MainControllerImpl implements MainController {
  private mainApi: MainApi;

  constructor(mainApi: MainApi) {
    this.mainApi = mainApi;
  }

  getAnniversaries(): Promise<Model.Anniversary[]> {
    return this.mainApi.getAnniversaries();
  }
}
