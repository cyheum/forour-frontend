import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { mixins } from '@/styles';
import Slider, { Settings } from 'react-slick';
import * as Model from '@/model/model-interface';

interface IProps {
  goToNext(): void;
  anniversaries: Model.Anniversary[];
}

const STDContainer = styled.div``;

const STDTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.8125rem;
`;

const STDDescription = styled.p`
  font-size: 0.875rem;
  color: #4d4d4d;
`;

const STDNextButton = styled.div`
  ${mixins.flexSet()}
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%) translateX(-1.25rem);

  button {
    font-family: Pretendard;
    color: black;
    font-size: 1rem;
    line-height: 1.625rem;
    text-decoration: underline;
  }
`;

const AnniversaryListLayout = styled.div<{ innerHeight: number | null }>`
  ${({ innerHeight }) =>
    innerHeight &&
    css`
      height: ${innerHeight - 139.75 * 2}px;
    `}
  ${mixins.flexSet('flex-start', 'center')}

  >div {
    ${mixins.flexSet('flex-start', 'flex-end', 'column')}
  }
`;

const ForourLogo = styled.img`
  width: 6.75rem;
  height: 2.375rem;
  margin-right: 0.9375rem;
  object-fit: contain;
`;

const ListLayout = styled.div`
  position: relative;
  border-bottom: 1px solid #000;
  width: 13.25rem;
`;

const List = styled.div`
  height: 14rem;
  margin-top: 2.34375rem;
  margin-right: 2rem;
  overflow-y: scroll;
`;

type ItemLayoutProps = {
  marginBottom?: number;
  paddingLeft?: number;
};

const ItemLayout = styled.div<ItemLayoutProps>`
  position: relative;
  padding-left: ${({ paddingLeft }) => paddingLeft ?? 1.0625}rem;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 1.5}rem;
  cursor: pointer;

  svg {
    position: absolute;
    left: 1.5rem;
    top: 0;
    z-index: -1;
  }
`;

const ItemTitle = styled.div`
  font-size: 1.5rem;
`;

const ItemValue = styled.div`
  font-size: 0.875rem;
`;

const AnniversaryImage = styled.img`
  width: 11.25rem;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

const STDLogoWrapper = styled.div`
  ${mixins.flexSet('flex-start', 'flex-end')}
`;

const STDSelectedAnniversary = styled.div`
  width: 13.25rem;
`;

const Step1Container: React.FC<IProps> = ({ goToNext, anniversaries }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [windowHeight, setWindowHeight] = useState<number | null>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, [currentIndex]);

  useEffect(() => {
    const selectedSessionAnniversary = sessionStorage.getItem(
      'selectedAnniversary'
    );
    if (selectedSessionAnniversary) {
      anniversaries.forEach(({ id }, index) => {
        if (id === JSON.parse(selectedSessionAnniversary).id) {
          setCurrentIndex(index);
        }
      });
    }
  }, [anniversaries]);

  const settings: Settings = {
    vertical: true,
    touchMove: true,
    arrows: false,
    verticalSwiping: true,
    afterChange: (index) => {
      setCurrentIndex(index);
    },
    // autoplay: true
  };

  const onClickAnniversary = (data: Model.Anniversary, index: number) => {
    sessionStorage.setItem('selectedAnniversary', JSON.stringify(data));
    setCurrentIndex(index);
  };

  return (
    <STDContainer>
      <STDTitle>무엇을 위한 꽃인가요?</STDTitle>
      <STDDescription>스크롤해서 선택해주세요</STDDescription>
      <AnniversaryListLayout innerHeight={windowHeight}>
        <div>
          <STDLogoWrapper>
            <ForourLogo src={'/forour@3x.png'} />
            <ListLayout>
              {anniversaries && currentIndex !== null && (
                <>
                  <STDSelectedAnniversary>
                    <ItemLayout marginBottom={0.46875} paddingLeft={0}>
                      <AnniversaryImage
                        src={anniversaries[currentIndex].image}
                      />
                      <ItemValue>{anniversaries[currentIndex].name}</ItemValue>
                    </ItemLayout>
                  </STDSelectedAnniversary>
                </>
              )}
            </ListLayout>
          </STDLogoWrapper>
          <List
            onTouchStart={() => (document.body.style.overflow = 'hidden')}
            onTouchEnd={() => document.body.removeAttribute('style')}
          >
            {anniversaries.map((data, i) => {
              const { english_name, name, image } = data;
              return (
                <ItemLayout key={i} onClick={() => onClickAnniversary(data, i)}>
                  <AnniversaryImage src={image} />
                  <ItemValue>{name}</ItemValue>
                  {currentIndex === i && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="212"
                      height="60"
                      viewBox="0 0 212 60"
                    >
                      <defs>
                        <radialGradient
                          id="radial-gradient"
                          cx="0.5"
                          cy="0.5"
                          r="0.5"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stopColor="#FF5D95" />
                          <stop offset="0.222" stopColor="#FF8AB3" />
                          <stop offset="1" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <rect
                        id="사각형_22"
                        data-name="사각형 22"
                        width="212"
                        height="60"
                        opacity="0.5"
                        fill="url(#radial-gradient)"
                      />
                    </svg>
                  )}
                </ItemLayout>
              );
            })}
          </List>
        </div>
      </AnniversaryListLayout>
      <STDNextButton>
        <button onClick={goToNext}>다음</button>
      </STDNextButton>
    </STDContainer>
  );
};

export default Step1Container;

// const TEST = [
//   { type: 'Friendship', value: '우정' },
//   { type: 'Love', value: '사랑' },
//   { type: '50th', value: '50일' },
//   { type: '100th', value: '100일' },
//   { type: 'test', value: '테스트' },
// ];
