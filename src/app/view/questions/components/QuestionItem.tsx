import React from "react"
import styled from "styled-components"

const QuestionItemLayout = styled.div`
width: 100%;
padding: 0 20px;

`

const QuestionItem:React.FC = () => {
    return(
        <QuestionItemLayout>
            <div>질문 아이템</div>
        </QuestionItemLayout>
    )
}

export default QuestionItem