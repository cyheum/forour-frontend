import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

interface IProps {
  goToNext(): void;
}

const STDTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.8125rem;
`;

const STDDescription = styled.p`
  font-size: 0.875rem;
  color: #4d4d4d;
`;

const STDNextButton = styled.div`
  ${mixins.flexSet()}

  button {
    font-size: 1.125rem;
    color: black;
    line-height: 1.625rem;
    text-decoration: underline;
  }
`;

const Step1Container: React.FC<IProps> = ({ goToNext }) => {
  return (
    <>
      <STDTitle>무엇을 위한 꽃인가요?</STDTitle>
      <STDDescription>스크롤해서 선택해주세요</STDDescription>
      <STDNextButton>
        <button onClick={goToNext}>다음</button>
      </STDNextButton>
    </>
  );
};

export default Step1Container;
