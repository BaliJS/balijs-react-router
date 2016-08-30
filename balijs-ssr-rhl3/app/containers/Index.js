import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/*
 * Prevent render on server-side
 * or use webpack and set css loader on server
 * or use isomorphic-style-loader
 */
 
if (process.env.CLIENT) {
  require('./Index.css');
}

export default class Index extends Component {
  render() {
    const { children, location } = this.props;

    return (
      <div>
        <ul className="nav">
          <li>
            <IndexLink to="/">Home</IndexLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(children, { key: location.key })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
