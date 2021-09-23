import * as Model from "./model-interface"

export interface QuestionApi{
    getQuestionsAndAnswers(): Promise<Model.QuestionAndAnswer[]>
}

export interface AnswerApi{
    createAnswer(answers:Model.Answer[]):Promise<void>
}