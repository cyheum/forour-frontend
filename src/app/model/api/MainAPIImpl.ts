import { MainApi } from '..';
import * as Model from 'app/model/model-interface';
import API from '../apiManager';

export default class MainApiImpl implements MainApi {
  getAnniversaries(): Promise<Model.Anniversary[]> {
    return new Promise((resolve) => {
      return API.GET('/anniversarys')
        .then((res) => resolve(res.data))
        .catch((err) => console.log('에러 표시', err));
    });
  }
}
