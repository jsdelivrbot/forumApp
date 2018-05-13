import * as React from 'react';

import AnswerFormComponent from '../../components/AnswerForm/AnswerForm';
import { AnswerFormProps } from './IAnswerFormProps';
import { AnswerFormState } from './IAnswerFormState';

class AnswerForm extends React.Component<AnswerFormProps, AnswerFormState> {
  state = {
    answer: {
      description: '',
      user: {
        firstName: 'Place',
        lastName: 'Holder'
      },
      createdAt: new Date()
    },
    valid: false
  };

  handleChange = event => {
    if (event.target.value.length == 0) {
      this.setState({
        valid: false,
      });
    } else {
      this.setState({
        valid: true
      });
    }
    this.setState({
      answer: {
        description: event.target.value,
        user: {
          firstName: 'Place',
          lastName: 'Holder'
        },
        createdAt: new Date(),
        question: this.props.question
      }
    });
  }
  private onSubmit = event => {
    event.preventDefault();
    this.props.addAnswer(this.state.answer);
    this.setState({
      answer: {
        description: '',
        user: {
          firstName: '',
          lastName: ''
        }
      },
      valid: false
    });
  }
  render() {
    return (
      <React.Fragment>
        <AnswerFormComponent
          answer={this.state.answer.description}
          valid={this.state.valid}
          onSubmit={this.onSubmit}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default AnswerForm;