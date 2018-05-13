import { IAnswer } from "./IAnswer";

export interface IQuestion {
  title: string;
  description: string;
  createdAt?: Date;
  icon?: string;
  answers?: Array<IAnswer>;
}