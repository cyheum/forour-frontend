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
    imageSrc,
  }: {
    name: string;
    mbti: string;
    imageSrc: string;
  }) => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${name}님과 어울리는 꽃이 왔어요`,
          description: `${name}님의 mbti는 ${mbti}에요`,
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
            title: 'forour 바로가기',
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
