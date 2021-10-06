import { MainController } from '..';
import { MainApi } from 'app/model';
import * as Entity from 'app/model/model-interface';

export default class MainControllerImpl implements MainController {
  private mainApi: MainApi;

  constructor(mainApi: MainApi) {
    this.mainApi = mainApi;
  }

  getAnniversary(): Promise<string[]> {
    return this.mainApi.getAnniversary();
  }
}
