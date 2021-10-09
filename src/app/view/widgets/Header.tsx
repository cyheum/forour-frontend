import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { errorTextState, mainLoadingState } from '@/store/main';
import { mixins } from '@/styles';
import { IconClose } from '@/assets';

interface IProps {
  isFixed: boolean;
  isSpin: boolean;
}

const STDContainer = styled.header<{ isFixed: boolean, isSpin:boolean }>`
  ${mixins.flexSet('flex-start')}
  padding: 1.25rem 0 1.125rem;
  ${({ isFixed }) =>
    isFixed &&
    'position: fixed; top: 0; z-index: 1000000; background-color: white;'}

  width: 100%;
  max-width: 23.4375rem;



  img {
    width: 1.75rem;
    height: 1.75rem;

    animation: spin 2s linear infinite;
    /* animation-play-state: ${(isSpin) => isSpin ? "running" : "paused"}; */
  }

  @keyframes spin {
    0%{
      transform: rotate(0deg);
    }

    100%{
      transform: rotate(360deg);
    }
  };
`;

const STDEmpty = styled.div`
  height: 4.125rem;
`;

const STDErrorMessage = styled.p`
  ${mixins.flexSet()}
  position: relative;
  height: 1.75rem;
  width: 18.5rem;
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

const Header: React.FC<IProps> = ({ isFixed, isSpin }) => {
  const [errorText, setErrorText] = useRecoilState(errorTextState);
  const setMainLoadingState = useSetRecoilState(mainLoadingState);

  useEffect(() => {
    setTimeout(() => setMainLoadingState(false), 2500);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [errorText]);

  return (
    <>
      <STDContainer isFixed={isFixed} isSpin={isSpin}>
        <img alt="헤더 꽃" src="/headerFlower.png" />
        {errorText && (
          <STDErrorMessage>
            {errorText}
            <STDCloseButton onClick={() => setErrorText('')}>
              <IconClose />
            </STDCloseButton>
          </STDErrorMessage>
        )}
      </STDContainer>
      {isFixed && <STDEmpty />}
    </>
  );
};

export default Header;
