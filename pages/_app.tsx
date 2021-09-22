import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import { AppProps } from 'next/app';

const _STDComponent = styled.div`
  position: relative;
  min-height: 100vh;
`;

const _STDBackground = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 9.875rem;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: 9.875rem 10rem;
  background-position: center bottom;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 251, 252, 0.7) 20%,
    rgba(255, 241, 245, 0.9) 38%,
    #ffdfea 54%,
    #ffc7da 69%,
    #ffa7c5 84%,
    #ff81ac 98%,
    #ff7ba8 100%,
    #ff7ba8 100%
  );
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
          <Component {...pageProps} />
        </_STDContainer>
        <_STDBackground />
      </_STDComponent>
    </RecoilRoot>
  );
}

export default MyApp;
