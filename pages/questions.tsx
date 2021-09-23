import React from 'react';
import {NextPage} from "next"
import { useRecoilState } from 'recoil';
import * as View from "app/view"


const Questions:NextPage = () => {


  return <View.QuestionsView />;
};

export default Questions;
