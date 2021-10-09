import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { mixins } from '@/styles';

interface IProps {
  goToStep(): void;
}

const STDContainer = styled.main<{ innerHeight: number | null }>`
  ${({ innerHeight }) =>
    innerHeight &&
    css`
      height: ${innerHeight - 66 * 2}px;
    `}
  ${mixins.flexSet('center', 'flex-start', 'column')}
`;

const STDArticleBox = styled.article`
  position: relative;
  margin-bottom: 3rem;

  &:last-child {
    margin: 0;
  }
`;

const STDImg = styled.img<{ width?: number }>`
  width: ${({ width }) => width ?? 5.313}rem;
  margin-bottom: 0.75rem;
`;

const STDDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.625rem;
  word-break: keep-all;
  color: black;
`;

const STDStartButton = styled.div`
  ${mixins.flexSet()}
  position: absolute;
  top: 3.9375rem;
  left: 17.3125rem;
  min-width: 3.5rem;

  button {
    font-family: Pretendard;
    font-size: 0.875rem;
    color: black;
    line-height: 1.625rem;
    text-decoration: underline;
  }
`;

const OnBoarding: React.FC<IProps> = ({ goToStep }) => {
  const [windowHeight, setWindowHeight] = useState<number | null>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  return (
    <STDContainer innerHeight={windowHeight}>
      <STDArticleBox>
        <STDImg alt="상단 로고 이미지" src="/forour@3x.png" />
        <STDDescription>
          Forour(폴라워)는 for과 our의 합성어로
          <br /> ‘우리의 -를 기념하는 꽃’을 의미합니다.
        </STDDescription>
      </STDArticleBox>
      <STDArticleBox>
        <STDImg
          alt="중간 설명 이미지"
          src="/for-friend-or-lover.png"
          width={12.0625}
        />
        <STDDescription>
          열두개의 상황을 드릴게요, 친구나 애인의 <br />
          행동을 예측한 두개의 답안지 중 하나를
          <br /> 선택해 주세요 어렵지 않을거에요!
        </STDDescription>
        <STDStartButton>
          <button onClick={goToStep}>시작하기</button>
        </STDStartButton>
      </STDArticleBox>
      <STDArticleBox>
        <STDImg alt="mbti" src="/mbtiLogo.png" width={4.313} />
        <STDDescription>
          폴라워는 답안지를 분석해서 상대방의 MBTI에
          <br /> 꼭 맞는 꽃을 추천해드릴게요
        </STDDescription>
      </STDArticleBox>
    </STDContainer>
  );
};

export default OnBoarding;
