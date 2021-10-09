export interface QuestionAndAnswer {
  Question: Question;
  Answer: Answer;
}

export interface Question {
  id: number;
  content: string;
}

export interface Answer {
  id?: number;
  question_id: number;
  content_a?: Content;
  content_b?: Content;
}

export interface Content {
  content: string;
  personality: 'E' | 'S' | 'I' | 'N' | 'T' | 'J' | 'F' | 'P';
}

export interface Results {
  flower_description: string;
  id: number;
  mbti_description: string;
  flower: string;
  personality: string;
  title: string;
  image: string;
  kakao_image: string;
}

export interface Anniversary {
  english_name: string;
  id: number;
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
