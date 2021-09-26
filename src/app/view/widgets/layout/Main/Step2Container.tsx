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

const STDSelectContainer = styled.article`
  ${mixins.flexSet('center', 'center', 'column')}
  margin: 11.4375rem 0 14.03125rem;
`;

const STDMyImage = styled.img`
  width: 3.0625rem;
  margin-bottom: 2.25rem;
`;

const STDSelectWrapper = styled.div`
  ${mixins.flexSet()}
  width: 100%;
  margin-bottom: 2.875rem;
`;

const STDSelectBox = styled.div`
  flex: 1;
  height: 3.4375rem;
  border: 0.0625rem solid black;
  background-color: #f0f0f0;

  &:first-child {
    margin-right: 0.4375rem;
  }
`;

const STDSelectResult = styled.div`
  width: 13.8125rem;
  height: 2.78125rem;
  border-bottom: 0.0625rem solid black;
`;

const STDNextButton = styled.div`
  ${mixins.flexSet()}
  padding-bottom: 4rem;

  button {
    font-size: 1.125rem;
    color: black;
    line-height: 1.625rem;
    text-decoration: underline;
  }
`;

const Step2Container: React.FC<IProps> = ({ goToNext }) => {
  return (
    <>
      <STDTitle>누구에게 선물할 꽃인가요?</STDTitle>
      <STDDescription>
        친구나 애인을 선택하고 이름을 입력해주세요
      </STDDescription>
      <STDSelectContainer>
        <STDMyImage alt="my image" src="/my.png" />
        <STDSelectWrapper>
          <STDSelectBox></STDSelectBox>
          <STDSelectBox></STDSelectBox>
        </STDSelectWrapper>
        <STDSelectResult></STDSelectResult>
      </STDSelectContainer>
      <STDNextButton>
        <button onClick={goToNext}>다음</button>
      </STDNextButton>
    </>
  );
};

export default Step2Container;
