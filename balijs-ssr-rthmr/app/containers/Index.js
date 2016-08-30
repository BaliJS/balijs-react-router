import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

if(process.env.CLIENT) {
  require('./Index.css');
}

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }
    
  handleClose() {
    this.setState({ open: false });
  }  

  render() {
    const { children, location } = this.props;
    return (
      <div>
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleClose}>
          <Menu onTouchTap={this.handleClose}>
            <MenuItem>
              <IndexLink className="link" to="/">Home</IndexLink>
            </MenuItem>
            <MenuItem>
              <Link className="link" to="about">About</Link>
            </MenuItem>
          </Menu>
        </Drawer>
        <AppBar
          title="BaliJS #9 - Router SSR Lazy Load 😁"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />        
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