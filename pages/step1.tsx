import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { anniversariesState } from '@/store/main';
import { Step1Container } from '@/view';
import { MainControllerImpl } from '@/controller/main-controller';
import MainApi from '@/model/api/MainAPIImpl';

const MainController = new MainControllerImpl(MainApi.prototype);

const Step1: React.FC = () => {
  const router = useRouter();
  const [anniversaries, setAnniversaries] = useRecoilState(anniversariesState);

  useEffect(() => {
    fetchAnniversaries();
  }, []);

  const fetchAnniversaries = async () => {
    const data = await MainController.getAnniversaries();
    setAnniversaries(data);
  };
  return (
    <section>
      <Step1Container
        goToNext={() => router.push(`/step2`)}
        anniversaries={anniversaries}
      />
    </section>
  );
};

export default Step1;
