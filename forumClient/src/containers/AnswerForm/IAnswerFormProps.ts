import { IAnswer } from "../../types/IAnswer";
import { IQuestion } from "../../types/IQuestion";

export interface IAnswerFormProps {
  question: IQuestion;
}

export interface IStoreProps {
  answers: Array<IAnswer>;
}

export interface IDispatchProps {
  addAnswer;
}

export type AnswerFormProps = IAnswerFormProps & IStoreProps & IDispatchProps;