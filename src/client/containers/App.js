import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';


class App extends Component {
  componentDidMount() {
    console.log('in App');
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.shape()
};

export default App;
