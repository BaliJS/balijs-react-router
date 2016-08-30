import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

const mountNode = document.getElementById('app');

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  mountNode
);

if(module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      mountNode
    );
  });
}
