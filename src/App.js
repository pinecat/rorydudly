import React, { Component } from 'react';
import Desktop from './views/Desktop';
import Mobile from './views/Mobile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    const small = width <= 700;

    if (small) {
      return (
        <Mobile />
      );
    } else {
      return (
        <Desktop />
      )
    }
  }
}

export default App;
