import { IQuestion } from "../../types/IQuestion";

export interface IQuestionProps {
}

export interface IStoreProps {
  question: IQuestion;
}

export interface IDispatchProps {
  questionAdd;
}

export type QuestionProps = IQuestionProps & IStoreProps & IDispatchProps;