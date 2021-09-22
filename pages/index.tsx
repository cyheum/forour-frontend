import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { test } from 'app/store/main';
import { GetQuestionControllerImpl } from 'app/controller/controllers';
import { Spinner } from 'app/view/components';
import Question from 'app/model/api/QuestionApiImpl';

<<<<<<< HEAD
const getQuestion = new GetQuestionControllerImpl(Question.prototype).execute()
=======
const main = new GetQuestionControllerImpl(Question.prototype).execute();
>>>>>>> d04b502ec03acf4536907e748e191e0ec6a5d957

const Main = () => {
  const router = useRouter();
  const [state, setState] = useRecoilState(test);

  useEffect(() => {
<<<<<<< HEAD
    getQuestion.then((res) => {
      console.log(res)
      return res
    })
  },[])
=======
    main.then((res) => {
      console.log(res);
      return res;
    });
  }, []);
>>>>>>> d04b502ec03acf4536907e748e191e0ec6a5d957

  return (
    <div>
      Hello world {state}
      <button onClick={() => setState('hello gw yh')}> go to Home!</button>
      <button onClick={() => router.push('/Home')}> go to Home!</button>
      <Spinner />
    </div>
  );
};

export default Main;
