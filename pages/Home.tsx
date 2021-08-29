import React from 'react';
import { test } from 'app/store/main';
import { useRecoilState } from 'recoil';

const Home:React.FC = () => {
  const [state, setState] = useRecoilState(test);

  return <div>{state}</div>;
};

export default Home;
