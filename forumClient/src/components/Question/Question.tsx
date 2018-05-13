import * as React from 'react';
import { Card, CardHeader, CardContent, Avatar } from 'material-ui';

import { IQuestionProps } from './IQuestionProps';
import './question.pcss';

const Question: React.SFC<IQuestionProps> = (props: IQuestionProps) => (
  <React.Fragment>
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="icon" className={`${props.question.icon} icon-fix`} />}
        title={<h2>{props.question.title}</h2>}
        subheader={
          props.question.createdAt ?
            <p>Autor - {props.creationDate}</p>
            :
            <p>Autor</p>
        }
      />
      <CardContent>
        <p>{props.question.description}</p>
      </ CardContent>
    </Card >
    {props.question.answers ?
      <div className={"answers"}>
        <h2>Answers</h2>
        <ul className={"answers-list"}>
          {props.question.answers.map((answer, index) => {
            return (
              <li key={`${answer.description}-${index}`}>
                {
                  answer.user.firstName &&
                  <h5>{answer.user.firstName} {answer.user.lastName} <small>hace unos segundos</small></h5>
                }
                <p className={"description"}>{answer.description}</p>
              </li>
            );
          }
          )}

        </ul>
      </div>
      :
      <p>Be the first to answer this question!</p>
    }
  </ React.Fragment>
);


export default Question;