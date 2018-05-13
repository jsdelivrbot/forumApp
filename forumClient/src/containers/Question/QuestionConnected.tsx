import { connect, Dispatch } from 'react-redux';

import Question from './Question';
import { IState } from '../../types/IState';
import { IStoreProps, IDispatchProps, QuestionProps } from './IQuestionProps';
import { actions, Actions } from '../../actions/actions';

const mapStateToProps = (state: IState): IStoreProps => (
  {
    question: state.question,
  }
);

const mapDispatchToProps = (dispatch: Dispatch<Actions> ):IDispatchProps => (
  {
    questionAdd: (question) => dispatch(actions.addQuestion(question)),
  }
);

const HomeConnected = connect<IStoreProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(Question);

export default HomeConnected;