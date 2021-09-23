import React from "react"
import styled from "styled-components"
import * as Model from "app/model/model-interface"

interface QuestionsItemProps{
    questionAndAnswer: Model.QuestionAndAnswer
    questionNumber:number
    isOpen:boolean
    setOpenQuestionNumber:()=>void;
}

const QuestionItemLayout = styled.article`
width: 100%;
border-bottom: 1px solid #000;

`
const HeaderLayout = styled.div`
    width: 100%;
    height: 24px;
    margin-bottom: 8px;
`

const QuestionNumber = styled.div`
    font-size: 20px;
`

interface QuestionContentsLayoutProps{
    isOpen:boolean
}

const QuestionContentsLayout = styled.section<QuestionContentsLayoutProps>`
height: ${(props) => props.isOpen ? "169px" : "0px"};
//169px 높이
margin-bottom: 19.5px;
overflow: hidden;

transition-duration: 0.5s;

`

const Question = styled.div`
font-size: 14px;
color: #4d4d4d;
margin-bottom: 23px;
`

const OptionLayout = styled.div`


`

const Option = styled.div`
display: flex;
align-items: center;

width: 100%;
height: 3.5rem;
border: 0.5px solid #000;
font-size: 0.875rem;
padding: 0 10px;

&:nth-child(2){
    margin-top: 16px;
}

`


const QuestionItem:React.FC<QuestionsItemProps> = (props) => {

    return(
        <QuestionItemLayout>
            <HeaderLayout onClick={props.setOpenQuestionNumber}>
                <QuestionNumber>Question {props.questionNumber}</QuestionNumber>
            </HeaderLayout>
         
            <QuestionContentsLayout isOpen={props.isOpen}>
            <Question>
                {props.questionAndAnswer.Question.content}
            </Question>
            <OptionLayout>
            <Option>
                {
                    props.questionAndAnswer.Answer.content_a.content
                }
            </Option>
            <Option>
                {
                    props.questionAndAnswer.Answer.content_b.content
                }
            </Option>
            </OptionLayout>
            </QuestionContentsLayout>
        </QuestionItemLayout>
    )
}

export default QuestionItem


