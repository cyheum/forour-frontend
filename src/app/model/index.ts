import * as Entity from "./model-interface"

export interface QuestionApi{
    getQuestion(): Promise<Entity.Question>
}