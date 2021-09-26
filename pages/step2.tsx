import React from 'react';
import { useRouter } from 'next/router';
import { Step2Container } from '@/view/widgets/layout';

const Step2: React.FC = () => {
  const router = useRouter();
  return (
    <section>
      <Step2Container goToNext={() => router.push('/questions')} />
    </section>
  );
};

export default Step2;
