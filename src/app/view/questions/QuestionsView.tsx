import React,{useEffect, useReducer} from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { useRecoilState,useSetRecoilState } from 'recoil';
import { questionsAndAnswersState, openQuestionNumberState, selectedAnswersState } from 'app/store/questions';
import {resultsState} from "app/store/results"
import { QuestionsControllerImpl } from 'app/controller/question-controller';
import {ResultsControllerImpl} from "app/controller/results-controller"
import QuestionApi from 'app/model/api/QuestionApiImpl';
import ResultsApi from "app/model/api/ResultsApiImpl"
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

const QuestionsController = new QuestionsControllerImpl(QuestionApi.prototype)
const ResultsController = new ResultsControllerImpl(ResultsApi.prototype)


const QuestionsView:React.FC = () => {
    const [questionsAndAnswers, setQuestionsAndAnswers] = useRecoilState(questionsAndAnswersState)
    const [openQuestionNumber, setOpenQuestionNumber] = useRecoilState(openQuestionNumberState)
    const [selectedAnswers, setSelectedAnswers] = useRecoilState(selectedAnswersState)
    const setResultsState = useSetRecoilState(resultsState)
    const router = useRouter();


    

    useEffect(() =>{
        QuestionsController.getQuestionsAndAnswers().then((questionsAndAnswers) => {
            setQuestionsAndAnswers(questionsAndAnswers)
        })
    }, [])
    

    const onClickOpenQuestion = (questionNumber: number) => {
        if (openQuestionNumber === questionNumber) {
            setOpenQuestionNumber(0)
        } else if (selectedAnswers.length === 0) {
            questionNumber === 1 && setOpenQuestionNumber(1)
        }
        else if (selectedAnswers[selectedAnswers.length - 1].questionId + 1 >= questionNumber) {
            setOpenQuestionNumber(questionNumber)
        }
    }

    const onClickSelectAnswer = (answer: SelectedAnswerType) => {
        if (!selectedAnswers.find((a) => a.questionId === answer.questionId)) {
            const result:SelectedAnswerType[] = [...selectedAnswers, {questionId: answer.questionId, contents: answer.contents}]
            setSelectedAnswers(result)   
        } else {
            const tempSelectedAnswers:SelectedAnswerType[] = JSON.parse(JSON.stringify(selectedAnswers))
           
            if (tempSelectedAnswers.find((a) => a.contents.content === answer.contents.content)) {
                const idx = tempSelectedAnswers.findIndex((a) => a.contents.content === answer.contents.content)
                tempSelectedAnswers.splice(idx, 1);
               
            } else {
                tempSelectedAnswers.forEach((t) => {
                    if (t.questionId === answer.questionId) {
                        t.contents = answer.contents
                    }
                })
            }


            tempSelectedAnswers.sort((a, b) => {
             return a.questionId - b.questionId
            })

            setSelectedAnswers(tempSelectedAnswers)
        }

    if (openQuestionNumber) {
        setOpenQuestionNumber(openQuestionNumber+1)
    }
    }

    

    const onClickSubmitAnswer = () => {
        let selectedPersonalityList = ""
        selectedAnswers.forEach((s) => {
            selectedPersonalityList = selectedPersonalityList + s.contents.personality
        })

        ResultsController.getResults(selectedPersonalityList).then((res) => { setResults(res); router.push('results') })
    }

    const setResults = (res:Model.Results) => {
        setResultsState(res);        
    }


    return(
        <QuestionsViewLayout>
            <QuestionsViewComponents.Header />
            <QuestionListLayout>
            {
               questionsAndAnswers?.map((questionAndAnswer,i) => <QuestionItemLayout key={questionAndAnswer.Question.id}><QuestionsViewComponents.QuestionItem  questionAndAnswer={questionAndAnswer} questionNumber={i+1} selectedAnswer={selectedAnswers.find((s) => s.questionId === questionAndAnswer.Question.id)} isOpen={openQuestionNumber === i + 1}  setOpenQuestionNumber={()=>onClickOpenQuestion(i+1)} onClickSelectAnswer={(answer)=>onClickSelectAnswer(answer)}/></QuestionItemLayout>)
            }
            </QuestionListLayout>
            <div onClick={onClickSubmitAnswer}>제출 버튼</div>
        </QuestionsViewLayout>
    )
}

export default QuestionsView

