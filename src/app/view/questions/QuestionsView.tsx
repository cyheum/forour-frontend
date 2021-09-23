import React,{useEffect, useReducer} from "react";
import styled from "styled-components";
import { useRecoilState } from 'recoil';
import { questionsAndAnswersState, openQuestionNumberState } from 'app/store/questions';
import { QuestionsControllerImpl } from 'app/controller/question-controller';
import Question from 'app/model/api/QuestionApiImpl';
import * as QuestionsViewComponents from "./components"



const QuestionsViewLayout = styled.div`
    width: 100%;
    padding: 0 20px;
`

const QuestionsController = new QuestionsControllerImpl(Question.prototype)

const QuestionsView:React.FC = () => {
    const [questionsAndAnswers, setQuestionsAndAnswers] = useRecoilState(questionsAndAnswersState)
    const [openQuestionNumber, setOpenQuestionNumber] = useRecoilState(openQuestionNumberState)


    

    useEffect(() =>{
        QuestionsController.getQuestionsAndAnswers().then((res) => {
            setQuestionsAndAnswers(res)
        })

    },[])
    

    const onClickOpenQuestion = (questionNumber:number) => {
        openQuestionNumber === questionNumber ? setOpenQuestionNumber(0) : setOpenQuestionNumber(questionNumber)

    }
    
  
    return(
        <QuestionsViewLayout>
            <QuestionsViewComponents.Header />
            {
               questionsAndAnswers.map((questionAndAnswer,i) => <QuestionsViewComponents.QuestionItem  questionAndAnswer={questionAndAnswer} questionNumber={i+1} isOpen={openQuestionNumber === i + 1} key={i} setOpenQuestionNumber={()=>onClickOpenQuestion(i+1)}/>)
            }
        </QuestionsViewLayout>
    )
}

export default QuestionsView

