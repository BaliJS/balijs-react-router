import React from 'react';
import { render } from 'react-dom';
import { match } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './Root';

const mountNode = document.getElementById('app');

injectTapEventPlugin();

render(
  <Root />,
  mountNode
);