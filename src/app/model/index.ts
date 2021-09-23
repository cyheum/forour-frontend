import * as Entity from "./model-interface"

export interface QuestionApi{
    getQuestionsAndAnswers(): Promise<Entity.QuestionAndAnswer[]>
}