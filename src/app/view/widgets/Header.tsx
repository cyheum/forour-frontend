import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

interface IProps {
  errorMsg: string;
}

const STDContainer = styled.header`
  ${mixins.flexSet('flex-start')}
  padding: 1.25rem 0;

  img {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

const STDErrorMessage = styled.p`
  ${mixins.flexSet()}
  height: 1.75rem;
  width: 100%;
  margin-left: 0.6875rem;
  background-color: #ff5d95;
`;

const Header: React.FC<IProps> = () => {
  return (
    <STDContainer>
      <img alt="헤더 꽃" src="/headerFlower.png" />
      <STDErrorMessage>{'에러에러에러'}</STDErrorMessage>
    </STDContainer>
  );
};

export default Header;
