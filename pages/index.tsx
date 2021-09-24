import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { test } from 'app/store/main';
import { Spinner } from '@/view/widgets';
import Question from 'app/model/api/QuestionApiImpl';

const Main = () => {
  const router = useRouter();
  const [state, setState] = useRecoilState(test);

  return (
    <div>
      Hello world {state}
      <button onClick={() => setState('hello gw yh')}> go to Home!</button>
      <button onClick={() => router.push('/questions')}>
        {' '}
        go to questions!
      </button>
      <Spinner />
    </div>
  );
};

export default Main;
