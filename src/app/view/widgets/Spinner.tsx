import React from 'react';
import styled from 'styled-components';
import { mixins } from '@styles';

const STDContainer = styled.div`
  ${mixins.flexSet()}
  position: fixed;
  width: 23.4375rem;
  height: 100%;
  padding: 2.375rem;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Spinner = () => {
  return (
    <STDContainer>
      <img alt="로더 gif" src="/12345.gif" />
    </STDContainer>
  );
};

export default Spinner;
