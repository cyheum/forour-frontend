import { atom } from 'recoil';

const isMainLoading = atom({
  key: 'mainLoadingState',
  default: false,
});

const anniversary = atom({
  key: 'anniversaryState',
  default: '',
});

export { isMainLoading, anniversary };
