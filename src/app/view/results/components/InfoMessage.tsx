import React from "react";
import styled from "styled-components";


interface InfoMessageProps{
  mainMessage: string,
  captionMessage:string
}

const InfoMessageLayout = styled.div``

const MainMessage = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`

const CationMessage = styled.div`
  font-size: 14px;
  color: #4d4d4d;

`

const InfoMessage: React.FC<InfoMessageProps> = (props) => {
  return (
    <InfoMessageLayout>
      <MainMessage>{props.mainMessage}</MainMessage>
      <CationMessage>{props.captionMessage}</CationMessage>
    </InfoMessageLayout>
  )
}

export default InfoMessage