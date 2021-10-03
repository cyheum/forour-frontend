import React from 'react';
import { useRouter } from 'next/router';
import { Step1Container } from '@/view/widgets/layout';

const Step1: React.FC = () => {
  const router = useRouter();
  return (
    <section>
      <Step1Container goToNext={() => router.push(`/step2`)} />
    </section>
  );
};

export default Step1;
