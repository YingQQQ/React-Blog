import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configuerStore';
import Root from './Root';

injectTapEventPlugin();

const store = configureStore(window.__REDUX_STATE__);
const rootEl = window.document.getElementById('app');

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
    rootEl
);

// RHL3
if (module.hot) {
  module.hot.accept('./Root', () => {
    console.log('IN MODULE.HOT');
    const RootNext = require('./Root');
    render(
      <AppContainer>
        <RootNext store={store} />
      </AppContainer>,
        rootEl
    );
  });
}
