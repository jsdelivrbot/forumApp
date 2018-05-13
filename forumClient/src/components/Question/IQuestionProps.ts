import { IQuestion } from "../../types/IQuestion";
import { Moment } from "moment";

export interface IQuestionProps {
  question: IQuestion;
  creationDate: string;
}