export interface Question {
    id: number,
    content: string
    answer: Answer_a[]

}

export interface Answer_a{
    id: number,
    content_a: any,
    content_b : any
}