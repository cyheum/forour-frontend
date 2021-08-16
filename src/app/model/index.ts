import * as Entity from "../model/entity"

export interface QuestionApi{
    getQuestion(): Promise<Entity.Question>
}