import { IAnswer } from "../../types/IAnswer";

interface IAnswerFormState {
  answer: IAnswer;
  valid: boolean;
}

export type AnswerFormState = IAnswerFormState;