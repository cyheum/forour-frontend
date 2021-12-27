import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { mainLoadingState } from '@/store/main';
import { AppProps } from 'next/app';
import { Header, Spinner, MainBakcground } from '@/view/widgets';
import Head from 'next/head';

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
  const [noBackground, setNoBackground] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const backgroundHandler = (onOff: boolean) => {
    setNoBackground(onOff);
  };

  const headerFixHandler = (onOff: boolean) => {
    setIsHeaderFixed(onOff);
  };

  return (
    <>
      <Head>
        <title>Forour</title>
      </Head>
      <RecoilRoot>
        <_STDComponent>
          <_STDContainer>
            <Header isFixed={isHeaderFixed} isSpin={true} />
            <Component
              {...pageProps}
              backgroundHandler={backgroundHandler}
              headerFixHandler={headerFixHandler}
            />
            <Spinner />
          </_STDContainer>
          <MainBakcground noBackground={noBackground} />
        </_STDComponent>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
