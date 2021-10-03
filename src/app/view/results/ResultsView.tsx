import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { resultsState } from "app/store/results"
import * as ResultsViewComponents from "./components"

const ResultsViewLayout = styled.div`
    width: 100%;
    padding: 0 20px;
`

const ResultsView: React.FC = () => {
  const [isLoadingStage, setIsLoadingStage] = useState<boolean>(true)
  const results = useRecoilValue(resultsState)

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingStage(false);
    },2000)
  },[])




  return (
    <ResultsViewLayout>
      {
        !isLoadingStage && results ?  <ResultsViewComponents.Results results={results}/> : <ResultsViewComponents.LoadingForResults />
      
      }
    
    </ResultsViewLayout>
    
  )
}

export default ResultsView