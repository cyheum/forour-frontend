import * as Entity from "app/model/model-interface"

export interface GetQuesionController{
    execute(): Promise<Entity.Question>
}