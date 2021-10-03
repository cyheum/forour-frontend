import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { mainLoadingState } from 'app/store/main';

import { mixins } from '@styles';

const STDContainer = styled.div`
  ${mixins.flexSet()}
  position: fixed;
  top: 0;
  width: 23.4375rem;
  height: 100%;
  padding: 2.375rem;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Spinner = () => {
  const mainLoading = useRecoilValue(mainLoadingState);

  return mainLoading ? (
    <STDContainer>
      <img alt='로더 gif' src='/12345.gif' />
    </STDContainer>
  ) : null;
};

export default Spinner;
