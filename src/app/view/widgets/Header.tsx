import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { errorTextState } from '@/store/main';
import { mixins } from '@/styles';

interface IProps {}

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
  font-size: 1rem;
  color: white;
  line-height: 1.8125rem;
`;

const Header: React.FC<IProps> = () => {
  const errorMsg = useRecoilValue(errorTextState);
  return (
    <STDContainer>
      <img alt='헤더 꽃' src='/headerFlower.png' />
      {errorMsg && <STDErrorMessage>{errorMsg}</STDErrorMessage>}
    </STDContainer>
  );
};

export default Header;
