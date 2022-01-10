import { ResultsApi } from '..';
import * as Model from 'app/model/model-interface';
import API from '../apiManager';

export default class ResultsApiImpl implements ResultsApi {
  getResults(personality: string): Promise<Model.Results> {
    return new Promise((resolve) => {
      return API.GET(`/result?answers=${personality}`).then((res) =>
        resolve(res.data)
      );
    });
  }
}
