import * as React from 'react';

import Header from '../Header/Header';
import QuestionConnected from '../../containers/Question/QuestionConnected';

const HomeComponent: React.SFC<{}> = (props: {}): JSX.Element => (
  <React.Fragment>
    <Header />
    <QuestionConnected />
  </React.Fragment>
);


export default HomeComponent;