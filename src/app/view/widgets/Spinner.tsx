import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { mainLoadingState } from 'app/store/main';

import { mixins } from '@styles';

const STDContainer = styled.div`
  ${mixins.flexSet('center', 'flex-end')}
  position: fixed;
  top: 0;
  z-index: 1;
  width: 23.4375rem;
  height: 100%;
  background-position: 50% 50%;
  background-color: white;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateX(-1.25rem);
    width: 14rem;
    object-fit: contain;
  }
`;

const _STDBackground = styled.div`
  width: 100%;
  height: 9.875rem;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: 9.875rem 10rem;
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

const Spinner = () => {
  const mainLoading = useRecoilValue(mainLoadingState);

  return mainLoading ? (
    <STDContainer>
      <img alt="로더 gif" src="/12345.gif" />
      <_STDBackground />
    </STDContainer>
  ) : null;
};

export default Spinner;
