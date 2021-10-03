import React from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import * as Model from "app/model/model-interface"
import InfoMessage from "./InfoMessage"

interface ResultsProps{
  results: Model.Results
}

const ResultsLayout = styled.div``

const MediumText = styled.div`
  font-size: 20px;
  font-weight: 500;

`

const InfoMessageLayout = styled.div`
margin-bottom: 69px;
`

const SubjectLayout = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30.8px;

`

const Logo = styled.div`
  font-family: NaNJauneTRIAL-Midi;
  font-size: 38px;
  font-weight: 300;

`

const Subject = styled.div``

const FlowerImage = styled.img``

const MbtiInfoLayout = styled.div`
margin-bottom: 36px;

`

const InfoTitleText = styled.div`
  font-size: 20px;
  color: #ff5d95;
  margin-bottom: 8px;
`

const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 14px;
`

const Description = styled.div`
  font-size: 14px;
  line-height: 1.86;

`

const FlowerInfoLayout = styled.div`
  margin-bottom: 157px;

`

const ActiveBtnLayout = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 52px;
`

const ActionBtn = styled.div`
  font-size: 18px;
  text-decoration: underline;

`

const Results: React.FC<ResultsProps> = (props) => {
  const router = useRouter();


  return (
    <ResultsLayout>
      <InfoMessageLayout>
      <InfoMessage mainMessage={"아, 이게 좋겠어요"} captionMessage={"예흠님의 MBTI와 딱 어울리는 꽃이에요"}/>
      </InfoMessageLayout>
      <SubjectLayout>
        <Logo>Forour</Logo>
        <Subject>
          <FlowerImage alt="대표 꽃" src={props.results.image}/>

        </Subject>

      </SubjectLayout>
      <MbtiInfoLayout>
        <InfoTitleText>{props.results.personality}</InfoTitleText>
        <InfoTitle>{props.results.title}</InfoTitle>
        <Description>{props.results.mbti_description}</Description>

      </MbtiInfoLayout>

      <FlowerInfoLayout>
        <InfoTitleText>어울리는 꽃</InfoTitleText>
        <InfoTitle>{props.results.flower}</InfoTitle>
        <Description>{ props.results.flower_description}</Description>
      </FlowerInfoLayout>
      <ActiveBtnLayout>
        <ActionBtn onClick={()=>router.push("/")}>
          다시하기
        </ActionBtn>
        <ActionBtn>
          공유하기
        </ActionBtn>

      </ActiveBtnLayout>

    </ResultsLayout>
  )
}

export default Results