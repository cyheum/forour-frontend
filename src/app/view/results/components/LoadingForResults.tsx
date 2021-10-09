import React from 'react';
import styled from 'styled-components';
import InfoMessage from './InfoMessage';
import { mixins } from '@/styles';
import { receiverState } from '@/store/main';
import { useRecoilValue } from 'recoil';

const LoadingForResultsLayout = styled.div``;

// const LoadingMessage = styled.div`
//   font-size: 20px;
//   font-weight: 500;
// `;

// const CationMessage = styled.div`
//   font-size: 14px;
//   color: #4d4d4d;
// `;

const STDLoadingImage = styled.div`
  ${mixins.flexSet()}
  margin-top: 10.4375rem;
  width: 100%;

  img {
    width: 14rem;
  }
`;

const LoadingForResults: React.FC = () => {
  const receiver = useRecoilValue(receiverState);

  return (
    <LoadingForResultsLayout>
      <InfoMessage
        mainMessage={'음, 뭐가 좋을지 고민중이에요'}
        captionMessage={`${receiver}님의 MBTI를 분석중입니다.`}
      />
      <STDLoadingImage>
        <img src="/12345.gif" />
      </STDLoadingImage>
    </LoadingForResultsLayout>
  );
};

export default LoadingForResults;
