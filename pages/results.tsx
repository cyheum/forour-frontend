import React, { useEffect } from 'react';
import { NextPage } from 'next';
import * as View from 'app/view';
import * as Model from '@/model/model-interface';

declare global {
  interface Window {
    Kakao: Model.Kakao;
  }
}

const Results: NextPage = () => {
  const HOME = 'https://forour.space';
  useEffect(() => {
    window.Kakao.init('70a32e4d04cf44fe1dc5693247b2a8d0');

    return () => {
      window.Kakao.cleanup();
    };
  }, []);

  const onClickKaKaoShare = ({
    name,
    mbti,
    flower,
    imageSrc,
    anniversary,
    description
  }: {
    name: string;
    mbti: string;
    flower: string;
    imageSrc: string;
    anniversary: string;
    description: string;
  }) => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${name}님과 어울리는 ${flower}이(가) 왔어요!`,
          description: `우리의 ${anniversary}에 어울리는 꽃은 ${flower} 같아요!\n${flower}의 꽃말은 ${description}이랍니다!\n그리고 혹시 ${name}님의 MBTI는 ${mbti} 맞나요?`,
          imageUrl: imageSrc,
          link: {
            webUrl: HOME,
            mobileWebUrl: HOME,
            androidExecutionParams: HOME,
            iosExecutionParams: HOME,
          },
        },
        buttons: [
          {
            title: '나도 이 사람과 어울리는 꽃 배달해주기',
            link: {
              webUrl: HOME,
              mobileWebUrl: HOME,
              androidExecutionParams: HOME,
              iosExecutionParams: HOME,
            },
          },
        ],
      });
    }
  };

  return <View.ResultsView onClickKaKaoShare={onClickKaKaoShare} />;
};

export default Results;
