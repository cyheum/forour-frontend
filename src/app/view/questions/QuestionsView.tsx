import React,{useEffect, useReducer} from "react";
import styled from "styled-components";
import { useRecoilState } from 'recoil';
import { questionsAndAnswersState, openQuestionNumberState, selectedAnswersState } from 'app/store/questions';
import { QuestionsControllerImpl } from 'app/controller/question-controller';
import Question from 'app/model/api/QuestionApiImpl';
import * as QuestionsViewComponents from "./components"
import * as Model from "app/model/model-interface"

export type SelectedAnswerType = {
    questionId:number,
    contents: Model.Content

}


const QuestionsViewLayout = styled.div`
    width: 100%;
    padding: 0 20px;
`

const QuestionListLayout = styled.article`

`

const QuestionItemLayout = styled.section`
&:nth-last-child(1){
    padding-bottom: 43px;
}

`

const QuestionsController = new QuestionsControllerImpl(Question.prototype)

const QuestionsView:React.FC = () => {
    const [questionsAndAnswers, setQuestionsAndAnswers] = useRecoilState(questionsAndAnswersState)
    const [openQuestionNumber, setOpenQuestionNumber] = useRecoilState(openQuestionNumberState)
    const [selectedAnswers, setSelectedAnswers] = useRecoilState(selectedAnswersState)


    

    useEffect(() =>{
        QuestionsController.getQuestionsAndAnswers().then((questionsAndAnswers) => {
            setQuestionsAndAnswers(questionsAndAnswers)
        })

    },[])
    

    const onClickOpenQuestion = (questionNumber:number) => {
        openQuestionNumber === questionNumber ? setOpenQuestionNumber(0) : setOpenQuestionNumber(questionNumber)
    }

    const onClickSelectAnswer = (answer:SelectedAnswerType) => {
        const result:SelectedAnswerType[] = [...selectedAnswers, {questionId: answer.questionId, contents: answer.contents}]

        setSelectedAnswers(result)
    }
    
  
    return(
        <QuestionsViewLayout>
            <QuestionsViewComponents.Header />
            <QuestionListLayout>
            {
               questionsAndAnswers.map((questionAndAnswer,i) => <QuestionItemLayout key={questionAndAnswer.Question.id}><QuestionsViewComponents.QuestionItem  questionAndAnswer={questionAndAnswer} questionNumber={i+1} selectedAnswer={selectedAnswers.find((s) => s.questionId === questionAndAnswer.Question.id)} isOpen={openQuestionNumber === i + 1}  setOpenQuestionNumber={()=>onClickOpenQuestion(i+1)} onClickSelectAnswer={(answer)=>onClickSelectAnswer(answer)}/></QuestionItemLayout>)
            }
            </QuestionListLayout>
        </QuestionsViewLayout>
    )
}

export default QuestionsView

