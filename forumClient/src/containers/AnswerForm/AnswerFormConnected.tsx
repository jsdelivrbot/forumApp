import { connect, Dispatch } from 'react-redux';


import AnswerForm from './AnswerForm';
import { IState } from '../../types/IState';
import { IStoreProps, IDispatchProps } from './IAnswerFormProps';
import { Actions, actions } from '../../actions/actions';
import { IAnswer } from '../../types/IAnswer';


const mapStateToProps = (state: IState): IStoreProps => (
  {
    answers: state.question.answers
  }
);

const mapDispatchToProps = (dispatch: Dispatch<Actions>): IDispatchProps => (
  {
    addAnswer: (answer: IAnswer) => dispatch(actions.addAnswer(answer)),
  }
);

const AnswerFormConnected = connect<IStoreProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(AnswerForm);

export default AnswerFormConnected;


