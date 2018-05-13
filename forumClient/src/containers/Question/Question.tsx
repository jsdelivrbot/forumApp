import * as React from 'react';
import * as moment from 'moment';

import QuestionComponent from '../../components/Question/Question';
import AnswerFormConnected from '../AnswerForm/AnswerFormConnected';
import { QuestionProps } from './IQuestionProps';




class Question extends React.Component<QuestionProps> {

  private renderQuestions = () => {
    return (
      <section>
        <QuestionComponent
          question={this.props.question}
          creationDate={moment(this.props.question.createdAt).locale('es').fromNow()}
        />
        <AnswerFormConnected question={this.props.question} />
      </section>
    );
  }
render() {
  return (
    this.renderQuestions()
  );
}
}

export default Question;