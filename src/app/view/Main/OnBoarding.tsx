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
          Forour(폴라워)는 For과 Our의 합성어로
          <br /> ‘우리의 -를 기념하는 꽃’을 의미해요.
        </STDDescription>
      </STDArticleBox>
      <STDArticleBox>
        <STDImg
          alt="중간 설명 이미지"
          src="/for-friend-or-lover.png"
          width={12.0625}
        />
        <STDDescription>
          열두 개의 상황을 드릴게요. <br />
          상대방을 상상하며 둘 중 하나를 선택해주세요.
          <br /> 어렵지 않을 거예요!
        </STDDescription>
        <STDStartButton>
          <button onClick={goToStep}>시작하기</button>
        </STDStartButton>
      </STDArticleBox>
      <STDArticleBox>
        <STDImg alt="mbti" src="/mbtiLogo.png" width={4.313} />
        <STDDescription>
          Forour(폴라워)가 선택한 상황을 분석해서
          <br /> 상대방의 MBTI에 알맞는 꽃을 추천해드릴게요.
        </STDDescription>
      </STDArticleBox>
    </STDContainer>
  );
};

export default OnBoarding;
