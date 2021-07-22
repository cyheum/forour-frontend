import React from 'react';
import { test } from '@/app/store/main';
import { useRecoilState } from 'recoil';

const Home = () => {
  const [state, setState] = useRecoilState(test);

  return <div>{state}</div>;
};

export default Home;
