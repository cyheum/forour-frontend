import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

interface IProps {
  goToStep(): void;
}

const STDArticleBox = styled.article`
  padding-bottom: 2.21875rem;
  margin-bottom: 2.21875rem;
  border-bottom: 0.0625rem solid black;

  &:last-child {
    border: none;
    margin: 0;
  }
`;

const STDImg = styled.img<{ width?: number }>`
  width: ${({ width }) => width ?? 15.7}rem;
  margin-bottom: 1.125rem;
`;

const STDDescription = styled.p`
  font-size: 1rem;
  line-height: 1.625rem;
  word-break: keep-all;
  color: black;
`;

const STDStartButton = styled.div`
  ${mixins.flexSet()}
  margin: 5.09375rem 0 3.25rem;

  button {
    font-size: 1.125rem;
    color: black;
    line-height: 1.625rem;
    text-decoration: underline;
  }
`;

const OnBoarding: React.FC<IProps> = ({ goToStep }) => {
  return (
    <>
      <STDArticleBox>
        <STDImg alt="상단 로고 이미지" src="/forourLanding1.png" />
        <STDDescription>
          Forour(폴라워)는 for과 our의 합성어로
          <br /> ‘우리의 -를 기념하는 꽃’을 의미합니다.
        </STDDescription>
      </STDArticleBox>
      <STDArticleBox>
        <STDImg
          alt="중간 설명 이미지"
          src="/for-friend-or-lover.png"
          width={13.875}
        />
        <STDDescription>
          열두개의 상황을 드릴게요, 친구나 애인의 <br />
          행동을 예측한 두개의 답안지 중 하나를
          <br /> 선택해 주세요 어렵지 않을거에요!
        </STDDescription>
      </STDArticleBox>
      <STDArticleBox>
        <STDImg alt="mbti" src="/mbtiLogo.png" width={4.9375} />
        <STDDescription>
          폴라워는 답안지를 분석해서 상대방의 MBTI에
          <br /> 꼭 맞는 꽃을 추천해드릴게요
        </STDDescription>
      </STDArticleBox>
      <STDStartButton>
        <button onClick={goToStep}>시작하기</button>
      </STDStartButton>
    </>
  );
};

export default OnBoarding;
