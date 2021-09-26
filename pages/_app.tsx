import React from 'react';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import { Header, Spinner, MainBakcground } from '@/view/widgets';

const _STDComponent = styled.div`
  position: relative;
  min-height: 100vh;
`;

const _STDContainer = styled.div`
  max-width: 23.4375rem;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <_STDComponent>
        <_STDContainer>
          <Header errorMsg={''} />
          <Component {...pageProps} />
          <Spinner />
        </_STDContainer>
        <MainBakcground />
      </_STDComponent>
    </RecoilRoot>
  );
}

export default MyApp;
