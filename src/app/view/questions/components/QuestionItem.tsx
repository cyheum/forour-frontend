import React from "react"
import styled from "styled-components"

interface QuestionsItemProps{
    questionNumber:number
    question:string
}

const QuestionItemLayout = styled.div`
width: 100%;
padding: 0 20px;
`
const HeaderLayout = styled.div`
    width: 100%;
    height: 24px;
    margin-bottom: 8px;
`

const Title = styled.div`
    font-size: 20px;
`

const QuestionItem:React.FC<QuestionsItemProps> = (props) => {
    return(
        <QuestionItemLayout>
            <HeaderLayout>
                <Title>Question {props.questionNumber}</Title>
            </HeaderLayout>
        </QuestionItemLayout>
    )
}

export default QuestionItem


