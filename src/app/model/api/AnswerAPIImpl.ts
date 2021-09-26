import {AnswerApi} from ".."
import * as Model from "app/model/model-interface"
import API from "../apiManager"

export default class AnswerApiImpl implements AnswerApi {
  


  createAnswer(answers:Model.Answer[]):Promise<void>{
      return new Promise((resolve) => {
       
          return API.POST("/v1/answers",{bodyData: answers}).then((res) => resolve(res.data)).catch((err) => console.log("에러 표시",err))
      })
  }
}