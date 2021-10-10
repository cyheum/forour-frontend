import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedAnniversary } from 'app/store/main';
import { resultsState } from 'app/store/results';
import { useRouter } from 'next/router';
import * as ResultsViewComponents from './components';
import * as Model from '@/model/model-interface';
import { ResultsControllerImpl } from '@/controller/results-controller';
import ResultsApi from '@/model/api/ResultsApiImpl';

interface IProps {
  onClickKaKaoShare(data: {
    name: string;
    mbti: string;
    flower: string;
    imageSrc: string;
    anniversary: string;
    description: string;
    url: string;
  }): void;
}

const ResultsViewLayout = styled.div`
  width: 100%;
`;

const ResultsController = new ResultsControllerImpl(ResultsApi.prototype);

const ResultsView: React.FC<IProps> = ({ onClickKaKaoShare }) => {
  const [isLoadingStage, setIsLoadingStage] = useState<boolean>(true);
  const [results, setResultsState] = useRecoilState(resultsState);
  const selectedAnniversaryData = useRecoilValue(selectedAnniversary);

  const route = useRouter();
  const { character } = route.query as { character: string };

  useEffect(() => {
    if (!character) return;
    ResultsController.getResults(character).then((res) => {
      setResultsState(res);
    });

    sessionStorage.removeItem('receiver');
    sessionStorage.removeItem('selectedAnswers');
    sessionStorage.removeItem('selectedAnniversary');

    if (character) {
      setTimeout(() => {
        setIsLoadingStage(false);
      }, 2000);
    } else {
      route.push('/');
    }
  }, [character]);

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
