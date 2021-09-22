import React from 'react';
import styled from 'styled-components';

const STDContainer = styled.div`
  max-width: 23.4375rem;
  height: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Spinner = () => {
  return (
    <STDContainer>
      <img alt="로더 gif" src="/12345.gif" />{' '}
    </STDContainer>
  );
};

export default Spinner;
