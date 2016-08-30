import React, { Component } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount() - <App />');
  }

  handleToggle (){
    this.setState({ open: !this.state.open });
  }

  handleClose () {
    this.setState({open: false});
  }

  render() {
    const { children, location } = this.props;
    
    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <Menu onTouchTap={this.handleClose}>
            <MenuItem><Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/about">About</Link></MenuItem>
          </Menu>
        </Drawer>
        <AppBar
          title="BaliJS #9 The Router"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />        
        <ReactCSSTransitionGroup
          component="div"
          transitionName="slideIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(children, { key: location.key })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount() - <App />');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps() - <App />');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate() - <App />');
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount() - <App />');
  }
}