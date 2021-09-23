import {atom} from 'recoil'
import * as Entity from "app/model/model-interface"

const questionsAndAnswersState = atom<Entity.QuestionAndAnswer[]>({
    key:"questionsAndAnswers",
    default: [],
})

export {
    questionsAndAnswersState
}