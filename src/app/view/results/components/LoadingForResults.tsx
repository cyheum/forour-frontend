import React from "react";
import styled from "styled-components";
import InfoMessage from "./InfoMessage"


const LoadingForResultsLayout = styled.div``

const LoadingMessage = styled.div`
  font-size: 20px;
  font-weight: 500;
`

const CationMessage = styled.div`
  font-size: 14px;
  color: #4d4d4d;

`

const LoadingForResults: React.FC = () => {
  return (
    <LoadingForResultsLayout><InfoMessage mainMessage={"음, 뭐가 좋을지 고민중이에요"} captionMessage={"예흠님의 MBTI를 분석중입니다."}/></LoadingForResultsLayout>
  )
}

export default LoadingForResults

