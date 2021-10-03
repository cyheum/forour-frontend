import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { OnBoarding } from '@/view/widgets/layout';

const STDContainer = styled.section`
  padding: 3.1875rem 0 2rem;
`;

const Main = () => {
  const router = useRouter();
  return (
    <STDContainer>
      <OnBoarding goToStep={() => router.push(`/step1`)} />
    </STDContainer>
  );
};

export default Main;
