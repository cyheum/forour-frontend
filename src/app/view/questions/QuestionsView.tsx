import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  questionsAndAnswersState,
  openQuestionNumberState,
  selectedAnswersState,
  
} from 'app/store/questions';
import { errorTextState, receiverState } from '@/store/main';
import { resultsState } from 'app/store/results';
import { QuestionsControllerImpl } from 'app/controller/question-controller';
import { ResultsControllerImpl } from 'app/controller/results-controller';
import QuestionApi from 'app/model/api/QuestionApiImpl';
import ResultsApi from 'app/model/api/ResultsApiImpl';
import * as QuestionsViewComponents from './components';
import * as Model from 'app/model/model-interface';

export type SelectedAnswerType = {
  questionId: number;
  contents: Model.Content;
};

const QuestionsViewLayout = styled.div`
  width: 100%;
`;

const QuestionListLayout = styled.article``;

const QuestionItemLayout = styled.section`
  margin-bottom: 17.5px;
  &:nth-last-child(1) {
    margin-bottom: 5.906rem;
  }
`;

const NextBtn = styled.div`
  text-decoration: underline;
  padding-bottom: 3rem;
  width:100%;
  text-align: center;
`

const QuestionsController = new QuestionsControllerImpl(QuestionApi.prototype);
const ResultsController = new ResultsControllerImpl(ResultsApi.prototype);

const QuestionsView: React.FC = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useRecoilState(
    questionsAndAnswersState
  );
  const [openQuestionNumber, setOpenQuestionNumber] = useRecoilState(
    openQuestionNumberState
  );
  const [selectedAnswers, setSelectedAnswers] = useRecoilState(
    selectedAnswersState
  );

  const setReceiver = useSetRecoilState(receiverState)
  const setErrorText = useSetRecoilState(errorTextState);
  const setResultsState = useSetRecoilState(resultsState);
  const router = useRouter();

  useEffect(() => {
    QuestionsController.getQuestionsAndAnswers().then((questionsAndAnswers) => {
      setQuestionsAndAnswers(questionsAndAnswers);
    });

    return () => {
      setErrorText('');
    };
  }, []);

  useEffect(() => {
    const selectedAnswers = sessionStorage.getItem("selectedAnswers")
    const persistReceiver = sessionStorage.getItem("receiver")
      
    if (selectedAnswers && persistReceiver) {
      const selectedAnswersData = JSON.parse(selectedAnswers)
      const persistReceiverData:{receiver:string} = JSON.parse(persistReceiver)
      setSelectedAnswers(selectedAnswersData)
      setReceiver(persistReceiverData.receiver)
     }
    
    setOpenQuestionNumber(1)

  }, [])

  useEffect(() => {
    if (selectedAnswers?.length > 0) {
      const setSelectedAnswers = JSON.stringify(selectedAnswers)
      sessionStorage.setItem("selectedAnswers", setSelectedAnswers)
    }

  },[selectedAnswers])
 
 
  const onClickOpenQuestion = (questionNumber: number) => {
   
    if (openQuestionNumber === questionNumber) {
      setOpenQuestionNumber(0);
      setErrorText('');
     
    } else if (selectedAnswers.length === 0 && questionNumber !== 1 ) {
      questionNumber === 1 && setOpenQuestionNumber(1);
      setErrorText('차례차례 답변해주세요!');
  
    } else if (
      selectedAnswers[selectedAnswers.length - 1].questionId + 1 >=
      questionNumber
    ) {
      setOpenQuestionNumber(questionNumber);
      setErrorText('');
   
    } else {
      setErrorText('차례차례 답변해주세요!');
    }
  };

  const onClickSelectAnswer = (answer: SelectedAnswerType) => {
    let isNext = true
    setErrorText('');
    if (!selectedAnswers.find((a) => a.questionId === answer.questionId)) {
      const result: SelectedAnswerType[] = [
        ...selectedAnswers,
        { questionId: answer.questionId, contents: answer.contents },
      ];
      setSelectedAnswers(result);
    } else {
      const tempSelectedAnswers: SelectedAnswerType[] = JSON.parse(
        JSON.stringify(selectedAnswers)
      );

      if (
        tempSelectedAnswers.find(
          (a) => a.contents.content === answer.contents.content
        )
      ) {
        const idx = tempSelectedAnswers.findIndex(
          (a) => a.contents.content === answer.contents.content
        );
        isNext = false;
        tempSelectedAnswers.splice(idx, 1);
      } else {
        tempSelectedAnswers.forEach((t) => {
          if (t.questionId === answer.questionId) {
            t.contents = answer.contents;
          }
        });
      }

      tempSelectedAnswers.sort((a, b) => {
        return a.questionId - b.questionId;
      });

      setSelectedAnswers(tempSelectedAnswers);
    }

    if (openQuestionNumber && isNext) {
      setOpenQuestionNumber(openQuestionNumber + 1);
    }
  };

  const onClickSubmitAnswer = () => {
    
    let selectedPersonalityList = '';
    selectedAnswers.forEach((s) => {
      selectedPersonalityList =
        selectedPersonalityList + s.contents.personality;
    });

    if (selectedPersonalityList.length === 12) {
      ResultsController.getResults(selectedPersonalityList).then((res) => {
        setResults(res);
        router.push('results');
      })
    sessionStorage.removeItem("receiver");
    sessionStorage.removeItem("selectedAnswers");
    } else {
      setErrorText("모든 질문에 응답해주세요!")
    }

  };



  const setResults = (res: Model.Results) => {
    setResultsState(res);
  };

  return (
    <QuestionsViewLayout>
      <QuestionListLayout>
        {questionsAndAnswers?.map((questionAndAnswer, i) => (
          <QuestionItemLayout key={questionAndAnswer.Question.id}>
            <QuestionsViewComponents.QuestionItem
              questionAndAnswer={questionAndAnswer}
              questionNumber={i + 1}
              selectedAnswer={selectedAnswers.find(
                (s) => s.questionId === questionAndAnswer.Question.id
              )}
              isOpen={openQuestionNumber === i + 1}
              setOpenQuestionNumber={() => onClickOpenQuestion(i + 1)}
              onClickSelectAnswer={(answer) => onClickSelectAnswer(answer)}
            />
          </QuestionItemLayout>
        ))}
      </QuestionListLayout>
      <NextBtn onClick={onClickSubmitAnswer}>다음</NextBtn>
    </QuestionsViewLayout>
  );
};

export default QuestionsView;
