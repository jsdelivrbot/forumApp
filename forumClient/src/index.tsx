import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import Home from './components/Home/Home';
import { CssBaseline } from 'material-ui';
import './body.pcss';

const App: React.SFC<{}> = (): JSX.Element => (
  <React.Fragment>
    <CssBaseline />
    <Home />
  </React.Fragment>
);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app') as HTMLElement);