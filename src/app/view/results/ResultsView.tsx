import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { selectedAnniversary } from 'app/store/main';
import { resultsState } from 'app/store/results';
import { useRouter } from 'next/router';
import * as ResultsViewComponents from './components';

interface IProps {
  onClickKaKaoShare(data: {
    name: string;
    mbti: string;
    imageSrc: string;
  }): void;
}

const ResultsViewLayout = styled.div`
  width: 100%;
`;

const ResultsView: React.FC<IProps> = ({ onClickKaKaoShare }) => {
  const [isLoadingStage, setIsLoadingStage] = useState<boolean>(true);
  const results = useRecoilValue(resultsState);
  const selectedAnniversaryData = useRecoilValue(selectedAnniversary);

  const route = useRouter()

  useEffect(() => {

    if (results) {
      setTimeout(() => {
        setIsLoadingStage(false);
      }, 2000);
    } else {
      route.push("/")
    }
    
  }, []);

  return (
    <ResultsViewLayout>
      {!isLoadingStage && results ? (
        <ResultsViewComponents.Results
          results={results}
          anniversary={selectedAnniversaryData}
          onClickKaKaoShare={onClickKaKaoShare}
        />
      ) : (
        <ResultsViewComponents.LoadingForResults />
      )}
    </ResultsViewLayout>
  );
};

export default ResultsView;
