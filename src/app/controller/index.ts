import * as Entity from "app/model/model-interface"

export interface GetQuesionsController{
    getQuestionsAndAnswers(): Promise<Entity.QuestionAndAnswer[]>
}