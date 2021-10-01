import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { errorTextState } from '@/store/main';
import { mixins } from '@/styles';
import { IconClose } from '@/assets';

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
  position: relative;
  height: 1.75rem;
  width: 100%;
  margin-left: 0.6875rem;
  background-color: #ff5d95;
  font-size: 1rem;
  color: white;
  line-height: 1.8125rem;
`;

const STDCloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  width: 0.875rem;
  height: 0.875rem;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Header: React.FC<IProps> = () => {
  const [errorText, setErrorText] = useRecoilState(errorTextState);
  return (
    <STDContainer>
      <img alt='헤더 꽃' src='/headerFlower.png' />
      {errorText && (
        <STDErrorMessage>
          {errorText}
          <STDCloseButton onClick={() => setErrorText('')}>
            <IconClose />
          </STDCloseButton>
        </STDErrorMessage>
      )}
    </STDContainer>
  );
};

export default Header;
