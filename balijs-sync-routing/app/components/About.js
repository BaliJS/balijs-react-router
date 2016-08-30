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
    console.log('componentWillMount() - <About />');
  }

  render() {
    return (
    <div style={style.grid}>
      <img style={style.image} src="http://www.material-ui.com/images/grid-list/camera-813814_640.jpg" />
      <h1>Ini halaman About!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur amet, quas totam quisquam eius, sit quo tempore eos, unde accusamus, laborum velit similique incidunt fugit harum veritatis voluptatem labore repellendus!</p>
    </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount() - <About />');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps() - <About />');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate() - <About />');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() - <About />');
  }
}