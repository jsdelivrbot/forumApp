import { Actions } from '../actions/actions';
import * as ActionTypes from '../actions/actionTypes';
import { IState } from '../types/IState';
import { IQuestion } from '../types/IQuestion';

const initialState = {
  title: 'Android question',
  description: 'Hello guys! I have a little doubt about android!',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [
    {
      user: {
        firstName: 'Alejandro',
        lastName: 'Urdiales'
      },
      description: 'I know it!',
      createdAt: new Date()
    },
    {
      user: {
        firstName: 'Oscar',
        lastName: 'Rodriguez'
      },
      description: 'Tell me your doubt!',
      createdAt: new Date()
    }
  ]
};

export const questionReducer = (state: IQuestion = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.QUESTION_ADD:
      const { payload: newQuestion } = action;
      return {
        ...state,
        question: newQuestion
      };
    case ActionTypes.ANSWER_ADD:
      const { payload: newAnswer } = action;
      console.log(state);
      return {
        ...state,
          answers: [
            ...state.answers,
            newAnswer
          ],
      };
    default:
      return state;
  }
};