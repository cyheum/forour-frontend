import { atom } from 'recoil';

const mainLoadingState = atom({
  key: 'mainLoadingState',
  default: false,
});

const errorTextState = atom({ key: 'errorTextState', default: '' });

const anniversaryState = atom({
  key: 'anniversaryState',
  default: '',
});

const receiverState = atom({ key: 'receiverState', default: '' });

const receiverTypeState = atom({ key: 'receiverTypeState', default: '' });

export {
  mainLoadingState,
  errorTextState,
  anniversaryState,
  receiverState,
  receiverTypeState,
};
