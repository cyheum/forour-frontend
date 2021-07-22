import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { test } from '@/app/store/main';

const Main = () => {
  const router = useRouter();
  const [state, setState] = useRecoilState(test);

  return (
    <div>
      Hello world {state}
      <button onClick={() => setState('hello gw yh')}> go to Home!</button>
      <button onClick={() => router.push('/Home')}> go to Home!</button>
    </div>
  );
};

export default Main;
