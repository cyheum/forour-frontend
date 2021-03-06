import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { receiverState } from '@/store/main';
import { selectedAnswersState } from '@/store/questions';
import { useRecoilState, useSetRecoilState } from 'recoil';
import * as Model from 'app/model/model-interface';
import InfoMessage from './InfoMessage';

interface ResultsProps {
  results: Model.Results;
  anniversary: Model.Anniversary | null;
  onClickKaKaoShare(data: {
    name: string;
    mbti: string;
    flower: string;
    imageSrc: string;
    anniversary: string;
    description: string;
    url: string;
  }): void;
}

const ResultsLayout = styled.div``;

const MediumText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const InfoMessageLayout = styled.div`
  margin-bottom: 4.625rem;
`;

const SubjectLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30.8px;
`;

const Logo = styled.div`
  font-family: NaNJauneTRIAL-Midi;
  font-size: 38px;
  font-weight: 300;
`;

const Subject = styled.div``;

const MbtiInfoLayout = styled.div`
  position: absolute;
  margin-bottom: 36px;
  top: 81px;
`;

const TitleText = styled.div`
  font-size: 0.875rem;
  margin-bottom: 4px;
  font-weight: 600;
`;

const SubText = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 12px;
  color: #5d5d5d;
`;

const Description = styled.div<{ lineHeight?: number }>`
  font-size: 0.875rem;
  color: #939393;
  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight}rem;
    `}
  margin-bottom: 10px;
`;

const FlowerImageLayout = styled.div`
  position: relative;
  margin-bottom: 196.9px;
`;

const FlowerImage = styled.img``;

const FlowerInfoLayout = styled.div`
  margin-bottom: 2.6875rem;
`;

const AnniversaryText = styled.div`
  position: absolute;
  right: 1.5rem;
  top: -3rem;
  width: 10rem;
  font-size: 1.875rem;
  font-weight: 100;
  font-family: 'sfpro-thin', 'favorit-hangul';
  white-space: pre-wrap;
  text-align: center;
`;

const ActiveBtnLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 52px;
`;

const ActionBtn = styled.div`
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`;

const Results: React.FC<ResultsProps> = (props) => {
  const [receiver, setReceiver] = useRecoilState(receiverState);
  const setSelectedAnswersState = useSetRecoilState(selectedAnswersState);
  const router = useRouter();
  const { name, character } = router.query as {
    name: string;
    character: string;
  };

  const onClickRestart = () => {
    setReceiver('');
    setSelectedAnswersState([]);
    router.push('/');
  };

  return (
    <ResultsLayout>
      <InfoMessageLayout>
        <InfoMessage
          mainMessage={`${receiver || name || '--'}?????? MBTI??? ${
            props.results.personality
          }?????????`}
          captionMessage={`${receiver || name || '--'}?????? ${
            props.anniversary?.name ?? '?????????'
          }??? ${props.results.flower_name}???(???) ????????????`}
        />
      </InfoMessageLayout>
      <FlowerInfoLayout>
        <TitleText>???????????? ???</TitleText>
        <SubText>{props.results.flower_name}</SubText>
        <Description>{props.results.flower_description}</Description>
      </FlowerInfoLayout>
      <FlowerImageLayout>
        <AnniversaryText>
          {props.anniversary && props.anniversary.english_name}
        </AnniversaryText>
        <FlowerImage src={props.results.images.result} />
        <MbtiInfoLayout>
          <TitleText>{props.results.personality}</TitleText>
          <SubText>{props.results.title}</SubText>
          <Description lineHeight={1.5}>
            {props.results.mbti_description}
          </Description>
        </MbtiInfoLayout>
      </FlowerImageLayout>

      <ActiveBtnLayout>
        <ActionBtn onClick={onClickRestart}>????????????</ActionBtn>
        <ActionBtn
          onClick={() =>
            props.onClickKaKaoShare({
              name: receiver || name || '',
              mbti: props.results.personality,
              flower: props.results.flower_name,
              imageSrc: props.results.images.kakao,
              anniversary: props.anniversary?.name ?? '?????????',
              description: props.results.flower_description,
              url: `https://forour.space/results/?character=${character}&name=${name}`,
            })
          }
        >
          ????????????
        </ActionBtn>
      </ActiveBtnLayout>
    </ResultsLayout>
  );
};

export default Results;
