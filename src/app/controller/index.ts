import * as Entity from "app/model/entity"

export interface GetQuesionController{
    execute(): Promise<Entity.Question>
}