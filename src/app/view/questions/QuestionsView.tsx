import React,{useEffect} from "react";
import styled from "styled-components";
import { useRecoilState } from 'recoil';
import { questionsAndAnswersState } from 'app/store/questions';
import { QuestionsControllerImpl } from 'app/controller/question-controller';
import Question from 'app/model/api/QuestionApiImpl';
import * as QuestionsViewComponents from "./components"



const QuestionsViewLayout = styled.div`
    width: 100%;
`

const QuestionsController = new QuestionsControllerImpl(Question.prototype)

const QuestionsView:React.FC = () => {
    const [questionsAndAnswers, setQuestionsAndAnswers] = useRecoilState(questionsAndAnswersState)


    useEffect(() =>{
        QuestionsController.getQuestionsAndAnswers().then((res) => {
            setQuestionsAndAnswers(res)
        })

    },[])

  

    return(
        <QuestionsViewLayout>
            {
                questionsAndAnswers && questionsAndAnswers.map((v,i) => <QuestionsViewComponents.QuestionItem key={i}/>)
            }
        </QuestionsViewLayout>
    )
}

export default QuestionsView

