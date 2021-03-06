import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { mixins } from '@/styles';
import { useSetRecoilState } from 'recoil';
import { selectedAnniversary } from '@/store/main';
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
  transform: translate(-50%, 0);

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
  min-height: 22.5rem;

  > div {
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
  min-width: 14.25rem;
  margin-top: 2.34375rem;
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
    left: 0;
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
  const setSelectedAnniversary = useSetRecoilState(selectedAnniversary);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, [currentIndex]);

  useEffect(() => {
    const selectedSessionAnniversary = sessionStorage.getItem(
      'selectedAnniversary'
    );
    if (selectedSessionAnniversary) {
      anniversaries.forEach(({ _id }, index) => {
        if (_id === JSON.parse(selectedSessionAnniversary)._id) {
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
    setSelectedAnniversary(data);
  };

  return (
    <STDContainer>
      <STDTitle>????????? ?????? ?????????????</STDTitle>
      <STDDescription>??????????????? ??????????????????</STDDescription>
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
                        id="?????????_22"
                        data-name="????????? 22"
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
        <button onClick={goToNext}>??????</button>
      </STDNextButton>
    </STDContainer>
  );
};

export default Step1Container;

// const TEST = [
//   { type: 'Friendship', value: '??????' },
//   { type: 'Love', value: '??????' },
//   { type: '50th', value: '50???' },
//   { type: '100th', value: '100???' },
//   { type: 'test', value: '?????????' },
// ];
