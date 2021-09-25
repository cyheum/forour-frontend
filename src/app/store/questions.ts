import {atom} from 'recoil'
import * as Model from "app/model/model-interface"
import {SelectedAnswerType} from "app/view/questions/QuestionsView"

const questionsAndAnswersState = atom<Model.QuestionAndAnswer[]>({
    key:"questionsAndAnswers",
    default: [],
})

const openQuestionNumberState = atom<number | null>({
    key:"openQuestionNumber",
    default:null
})

const selectedAnswersState = atom<SelectedAnswerType[]>({
    key:"selectedAnswers",
    default: []
})


export {
    questionsAndAnswersState,
    openQuestionNumberState,
    selectedAnswersState
}