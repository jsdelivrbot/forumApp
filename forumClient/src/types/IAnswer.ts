import { IQuestion } from "./IQuestion";
import { IUser } from './IUser';

export interface IAnswer {
  user?: IUser;
  description: string;
  createdAt?: Date;
  question?: IQuestion;
}