import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { test } from 'app/store/main';
import {GetQuestionControllerImpl} from "app/controller/implementaion"
import Question from "app/model/api/QuestionApiImpl"

const main = new GetQuestionControllerImpl(Question.prototype).execute()

const Main = () => {
  const router = useRouter();
  const [state, setState] = useRecoilState(test);

  useEffect(() => {
    main.then((res) => {
      console.log(res)
      return res
    })
  },[])

  return (
    <div>
      Hello world {state}
      <button onClick={() => setState('hello gw yh')}> go to Home!</button>
      <button onClick={() => router.push('/Home')}> go to Home!</button>
    </div>
  );
};

export default Main;
