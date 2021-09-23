import * as Entity from "app/model/model-interface"

export interface QuesionsController{
    getQuestionsAndAnswers(): Promise<Entity.QuestionAndAnswer[]>
}