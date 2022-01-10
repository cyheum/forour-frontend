export interface QuestionAndAnswer {
  _id: number;
  question: string;
  question_order: number;
  answers: Answer[];
}

export interface Question {
  id: number;
  content: string;
}

export interface Answer {
  id?: number;
  content?: string;
  personality: 'E' | 'S' | 'I' | 'N' | 'T' | 'J' | 'F' | 'P';
}

export interface Results {
  _id: number;
  images: {
    result: string;
    kakao: string;
  };
  mbti: string;
  mbti_title: string;
  mbti_description: string;
  flower_name: string;
  flower_description: string;
  mbti_relation: MbtiRelation[];
  personality: string;
  title: string;
}

export interface MbtiRelation extends Results {
  relation: string;
}

export interface Anniversary {
  english_name: string;
  _id: number;
  image: string;
  name: string;
}

type LinkType = {
  webUrl?: string;
  mobileWebUrl?: string;
  androidExecutionParams?: string;
  iosExecutionParams?: string;
};

type SendDefaultContent = {
  title: string;
  description: string;
  imageUrl: string;
  link: LinkType;
};

type SendDefaultButtons = {
  title: string;
  link: LinkType;
};

type SendDefaultParams = {
  objectType: string;
  content: SendDefaultContent;
  buttons: SendDefaultButtons[];
};

export interface Kakao {
  init(key: any): any;
  cleanup(): any;
  Link: {
    sendDefault(params: SendDefaultParams): any;
  };
}
