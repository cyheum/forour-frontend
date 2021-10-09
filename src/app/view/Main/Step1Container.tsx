import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';
import Slider, { Settings } from 'react-slick';
import { useRecoilState } from 'recoil';
import {} from '@/store/main';
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

  button {
    font-size: 1.125rem;
    color: black;
    line-height: 1.625rem;
    text-decoration: underline;
  }
`;

const AnniversaryListLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 9.75rem;
  margin-bottom: 18.1875rem;
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
  position: absolute;
  height: 16rem;
  overflow: hidden;
  top: -1rem;
`;

const ItemLayout = styled.div`
  padding-left: 1.0625rem;
  margin-bottom: 1.5rem;
`;

const ItemTitle = styled.div`
  font-size: 1.5rem;
`;

const ItemValue = styled.div`
  font-size: 0.875rem;
`;

const Step1Container: React.FC<IProps> = ({ goToNext, anniversaries }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {}, [currentIndex]);

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

  return (
    <STDContainer>
      <STDTitle>무엇을 위한 꽃인가요?</STDTitle>
      <STDDescription>스크롤해서 선택해주세요</STDDescription>
      <AnniversaryListLayout>
        <ForourLogo src={'/forour@3x.png'} />
        <ListLayout>
          <List
            onTouchStart={() => (document.body.style.overflow = 'hidden')}
            onTouchEnd={() => document.body.removeAttribute('style')}
          >
            <Slider {...settings}>
              {anniversaries.map(({ english_name, name }, i) => {
                return (
                  <ItemLayout key={i}>
                    <ItemTitle>{english_name.split('\n').join(' ')}</ItemTitle>
                    <ItemValue>{name}</ItemValue>
                  </ItemLayout>
                );
              })}
            </Slider>
          </List>
        </ListLayout>
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
