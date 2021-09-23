import {atom} from 'recoil'
import * as Model from "app/model/model-interface"

const questionsAndAnswersState = atom<Model.QuestionAndAnswer[]>({
    key:"questionsAndAnswers",
    default: [],
})

const openQuestionNumberState = atom<number | null>({
    key:"openQuestionNumber",
    default:null
})

const selectedAnswersState = atom<Model.Answer[]>({
    key:"selectedAnswers",
    default: []
})


export {
    questionsAndAnswersState,
    openQuestionNumberState,
    selectedAnswersState
}