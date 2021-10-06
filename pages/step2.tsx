import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MainControllerImpl } from '@/controller/main-controller';
import MainApi from '@/model/api/MainAPIImpl';
import { Step2Container } from '@/view/';

const MainController = new MainControllerImpl(MainApi.prototype);

const Step2: React.FC = () => {
  const [anniversaries, setAnniversaries] = useState<string[]>([]);
  const router = useRouter();

  const fetchAnniversaries = async () => {
    const data = await MainController.getAnniversary();
    setAnniversaries(data);
  };

  useEffect(() => {
    fetchAnniversaries();
  }, []);

  return (
    <section>
      <Step2Container
        goToNext={() => router.push('/questions')}
        anniversaries={anniversaries}
      />
    </section>
  );
};

export default Step2;
