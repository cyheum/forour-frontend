import React from 'react';
import styled from 'styled-components';
import { receiverState } from '@/store/main';
import { useRecoilValue } from 'recoil';
import * as Model from 'app/model/model-interface';
import { SelectedAnswerType } from '../QuestionsView';
import * as Icon from 'app/assets';

interface QuestionsItemProps {
  questionAndAnswer: Model.QuestionAndAnswer;
  questionNumber: number;
  selectedAnswer?: SelectedAnswerType;
  isOpen: boolean;
  setOpenQuestionNumber: () => void;
  onClickSelectAnswer: (answer: SelectedAnswerType) => void;
}

const QuestionItemLayout = styled.article`
  width: 100%;
  border-bottom: 1px solid #8b8b8b;
`;
const HeaderLayout = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-right: 10px;
  /* margin-bottom: 10px; */

  .expand {
    transform: rotate(180deg);
    transition-duration: 0.2s;
    transition-timing-function: ease;
    -webkit-transition-duration: 0.2s;
    -webkit-transition-timing-function: ease;
    -moz-transition-duration: 0.2s;
    -moz-transition-timing-function: ease;
  }

  .collapse {
    transform: rotate(360deg);
    transition-duration: 0.2s;
    transition-timing-function: ease;
    -webkit-transition-duration: 0.2s;
    -webkit-transition-timing-function: ease;
    -moz-transition-duration: 0.2s;
    -moz-transition-timing-function: ease;
  }
`;
interface QuestionNumberProps {
  isSelectedQuestion: boolean;
  isOpenedQuestion: boolean;
}

const QuestionNumber = styled.div<QuestionNumberProps>`
  font-size: 20px;
  color: ${(props) =>
    props.isSelectedQuestion
      ? '#ff5d95'
      : props.isOpenedQuestion
      ? '#000'
      : '#717171'};
  transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
`;

interface QuestionContentsLayoutProps {
  isOpen: boolean;
}

const QuestionContentsLayout = styled.div<QuestionContentsLayoutProps>`
  max-height: ${(props) => (props.isOpen ? '400px' : '0px')};
  margin-bottom: 17.5px;
  overflow: hidden;

  transition-duration: 1s;
  -webkit-transition-duration: 1s;
  -moz-transition-duration: 1s;
`;

const Question = styled.div`
  font-size: 14px;
  color: #4d4d4d;
  margin-top: 10px;
  margin-bottom: 23px;
`;

const OptionLayout = styled.div``;

interface ContentsProps {
  isSelectedContents: boolean;
}

const Contents = styled.div<ContentsProps>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3.5rem;
  border: 0.5px solid #000;
  font-size: 0.875rem;
  padding: 0 10px;

  cursor: pointer;

  background-color: ${(props) =>
    props.isSelectedContents ? '#ff5d95' : '#fff'};
  color: ${(props) => (props.isSelectedContents ? '#fff' : '#000')};

  &:nth-child(2) {
    margin-top: 16px;
  }
`;

const IconCollapse = styled.div``;

const QuestionItem: React.FC<QuestionsItemProps> = (props) => {
  const receiver = useRecoilValue(receiverState);
  const onClickOption = (contents: Model.Answer) => {
    const selectedAnswer: SelectedAnswerType = {
      questionId: props.questionAndAnswer._id,
      questionOrder: props.questionAndAnswer.question_order,
      contents: contents,
    };

    props.onClickSelectAnswer(selectedAnswer);
  };

  return (
    <QuestionItemLayout>
      <HeaderLayout onClick={props.setOpenQuestionNumber}>
        <QuestionNumber
          isSelectedQuestion={Boolean(props.selectedAnswer)}
          isOpenedQuestion={props.isOpen}
        >
          Question {props.questionNumber}
        </QuestionNumber>
        <IconCollapse className={props.isOpen ? 'expand' : 'collapse'}>
          <Icon.IconCollapse />
        </IconCollapse>
      </HeaderLayout>

      <QuestionContentsLayout isOpen={props.isOpen}>
        <Question>
          {props.questionAndAnswer.question.replace(/name/gi, receiver)}
        </Question>
        <OptionLayout>
          {props.questionAndAnswer.answers.map((answer, i) => (
            <Contents
              key={answer.id ?? i}
              isSelectedContents={Boolean(
                props.selectedAnswer?.contents.content === answer.content
              )}
              onClick={() => answer.content && onClickOption(answer)}
            >
              {answer.content ? answer.content.replace(/name/gi, receiver) : ''}
            </Contents>
          ))}
        </OptionLayout>
      </QuestionContentsLayout>
    </QuestionItemLayout>
  );
};

export default QuestionItem;
