
import { TEST_ACTION, TEST_ACTION_WITHOUT_PAYLOAD, QUESTION_ADD, ANSWER_ADD } from './actionTypes';
import { ActionCreator, ActionsUnion } from './ActionCreatorHelper';
import { IQuestion } from '../types/IQuestion';
import { IAnswer } from '../types/IAnswer';



export const actions = {
  addQuestion: (question: IQuestion) => ActionCreator(QUESTION_ADD, question),
  addAnswer: (answer: IAnswer) => ActionCreator(ANSWER_ADD, answer)
};


export type Actions = ActionsUnion<typeof actions>;