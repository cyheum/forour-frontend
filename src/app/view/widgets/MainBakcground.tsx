import { mixins } from '@/styles';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  noBackground: boolean;
}

const STDContainer = styled.div`
  ${mixins.flexSet('center', 'flex-end')}
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
`;

const _STDBackground = styled.div`
  width: 100%;
  height: 9.875rem;
  object-fit: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 251, 252, 0.7) 20%,
    rgba(255, 241, 245, 0.9) 38%,
    #ffdfea 54%,
    #ffc7da 69%,
    #ffa7c5 84%,
    #ff81ac 98%,
    #ff7ba8 100%,
    #ff7ba8 100%
  );
`;
const STDRightBackContainer = styled.div`
  ${mixins.flexSet('flex-end', 'center')}
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
`;

const _STDRightBackground = styled.div`
  width: 9.875rem;
  height: 100%;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: 9.875rem 100%;
  background-position: center bottom;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 251, 252, 0.7) 20%,
    rgba(255, 241, 245, 0.9) 38%,
    #ffdfea 54%,
    #ffc7da 69%,
    #ffa7c5 84%,
    #ff81ac 98%,
    #ff7ba8 100%,
    #ff7ba8 100%
  );
`;

const MainBakcground: React.FC<IProps> = ({ noBackground }) => {
  return !noBackground ? (
    <STDContainer>
      <_STDBackground />
    </STDContainer>
  ) : (
    <STDRightBackContainer>
      <_STDRightBackground />
    </STDRightBackContainer>
  );
};

export default MainBakcground;
