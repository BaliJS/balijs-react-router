import React, { Component } from 'react';

const style = {
  grid: {
    padding: '1rem',
    position: 'absolute'
  },
  image: {
    maxWidth: '100%'
  }
}

export default class Home extends Component {  
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('componentWillMount() - <Home />');
  }

  render() {
    return (
      <div style={style.grid}>
        <img style={style.image} src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        <h1>Halo, ini Home!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur amet, quas totam quisquam eius, sit quo tempore eos, unde accusamus, laborum velit similique incidunt fugit harum veritatis voluptatem labore repellendus!</p>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount() - <Home />');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps() - <Home />');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate() - <Home />');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() - <Home />');
  }
}