import {Question} from "./Question";
import {AnswerInterface} from "./AnswerInterface";

export interface Questions {
    question: Question,
    answers: AnswerInterface[]
}