import * as Model from "app/model/model-interface"

export interface QuesionsController{
    getQuestionsAndAnswers(): Promise<Model.QuestionAndAnswer[]>
}

export interface AnswerController{
    createAnswers(answers:Model.Answer[]):Promise<void>
}