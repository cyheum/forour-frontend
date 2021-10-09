import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { mainLoadingState } from '@/store/main';
import { useRouter } from 'next/router';
import { OnBoarding } from '@/view';
import { mixins } from '@/styles/mixins';

interface IProps {
  backgroundHandler(onOff: boolean): void;
}

const Main: React.FC<IProps> = ({ backgroundHandler }) => {
  const router = useRouter();
  const mainLoading = useRecoilValue(mainLoadingState);

  useEffect(() => {
    if (!mainLoading) {
      backgroundHandler(true);
    }

    return () => {
      backgroundHandler(false);
    };
  }, [mainLoading]);

  return (
    <>
      <section>
        <OnBoarding goToStep={() => router.push(`/step1`)} />
      </section>
    </>
  );
};

export default Main;
