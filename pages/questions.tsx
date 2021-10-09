import React, { useEffect } from 'react';
import { NextPage } from 'next';
import * as View from 'app/view';

interface IProps {
  headerFixHandler(onOff: boolean): void;
}

const Questions: NextPage<IProps> = ({ headerFixHandler }) => {
  useEffect(() => {
    headerFixHandler(true);

    return () => {
      headerFixHandler(false);
    };
  }, []);

  return <View.QuestionsView />;
};

export default Questions;
