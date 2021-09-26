import React from "react";
import styled from "styled-components";

const ResultsViewLayout = styled.div`
    width: 100%;
    padding: 0 20px;
`

const ResultsView: React.FC = () => {
  return (
    <ResultsViewLayout>
      <div>결과</div>
    </ResultsViewLayout>
    
  )
}

export default ResultsView