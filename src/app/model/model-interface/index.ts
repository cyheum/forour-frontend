export interface QuestionAndAnswer{
    question:Question,
    answer:Answer
}

export interface Question{
    id: number,
    content:string
}

export interface Answer{
    id:number,
    question_id:number,
    content_a: Content,
    content_b: Content
}

export interface Content{
    content:string,
    personality:"E"|"S"|"I"|"N"|"T"|"J"|"F"|"P"

}


