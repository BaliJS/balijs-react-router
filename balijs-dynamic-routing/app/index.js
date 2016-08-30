import React from 'react';
import { render } from 'react-dom';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router'

// import App from './App';

const routes = {
	path: '/',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./App').default)
    })
  },

	getIndexRoute(nextState, cb) {
    require.ensure([], require => {
      cb(null, {
      	component: require('./component/Home').default 
      })
    })
  },

	childRoutes: [
		{
			path: 'todos/:id',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./component/Todo').default)
				});
			}
		},
		{
			path: 'album',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./component/Album').default)
				});
			}
		},
		{
			path: 'contact',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./component/Contact').default)
				});
			}
		},
		{
			path: '*',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./component/NotFound').default)
				});
			}
		}
	]
}

render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));