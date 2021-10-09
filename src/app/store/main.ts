import { atom } from 'recoil';
import * as Model from '@/model/model-interface';

const mainLoadingState = atom({
  key: 'mainLoadingState',
  default: true,
});

const errorTextState = atom({ key: 'errorTextState', default: '' });

const anniversariesState = atom<Model.Anniversary[]>({
  key: 'anniversaiesState',
  default: [],
});

const selectedAnniversary = atom<Model.Anniversary | null>({
  key: 'selectedAnniversary',
  default: null,
});

const receiverState = atom({ key: 'receiverState', default: '' });

const receiverTypeState = atom({ key: 'receiverTypeState', default: '' });

export {
  mainLoadingState,
  errorTextState,
  anniversariesState,
  receiverState,
  receiverTypeState,
  selectedAnniversary,
};
