import * as React from 'react';
import { TextField, Button } from 'material-ui';

import './answer-form.pcss';
import { IAnswerFormProps } from './IAnswerFormProps';

const AnswerForm: React.SFC<IAnswerFormProps> = (props: IAnswerFormProps) => (
  <div className={"answer-form"}>
    <form onSubmit={props.onSubmit}>
      <TextField
        id="textarea"
        name="description"
        placeholder={"Type your answer!"}
        multiline
        margin="normal"
        rows={2}
        rowsMax={2}
        onChange={props.onChange}
        value={props.answer}
      />
      <Button
        disabled={!props.valid ? true : false}
        type={"submit"}
        variant={"raised"}
        className={props.valid ? "submit-answer-button-active" : ""}
      >
        Submit
      </Button>
    </form>
  </div>
);

export default AnswerForm;