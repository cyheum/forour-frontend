import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { mainLoadingState } from '@/store/main';
import { AppProps } from 'next/app';
import { Header, Spinner, MainBakcground } from '@/view/widgets';

const _STDComponent = styled.div`
  position: relative;
  min-height: 100vh;
`;

const _STDContainer = styled.div`
  max-width: 23.4375rem;
  padding: 0 1.25rem;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <_STDComponent>
        <_STDContainer>
          <Header />
          <Component {...pageProps} />
          <Spinner />
        </_STDContainer>
        <MainBakcground />
      </_STDComponent>
    </RecoilRoot>
  );
}

export default MyApp;
