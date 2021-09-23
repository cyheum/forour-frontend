import {QuestionApi} from ".."
import * as Entity from "app/model/model-interface"
import API from "../apiManager"


export default class QuestionApiImpl implements QuestionApi {
    getQuestionsAndAnswers():Promise<Entity.QuestionAndAnswer[]>{
        return new Promise((resolve) => {
         
            return API.GET("/v1/questions").then((res) => resolve(res.data)).catch((err) => console.log("에러 표시",err))
        })
    }
}