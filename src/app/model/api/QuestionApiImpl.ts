import {QuestionApi} from ".."
import * as Entity from "app/model/model-interface"
import API from "../apiManager"


export default class QuestionApiImpl implements QuestionApi {
    getQuestion():Promise<Entity.Question>{
        return new Promise((resolve) => {
            return API.GET("").then((res) => resolve(res)).catch((err) => console.log(err))
        })
    
    }
}