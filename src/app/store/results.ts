import { atom } from 'recoil';
import * as Model from 'app/model/model-interface';

const resultsState = atom<Model.Results | undefined>({
  key: 'resultsState',
  default: undefined,
});

export { resultsState };
