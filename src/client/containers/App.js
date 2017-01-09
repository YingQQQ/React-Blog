import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.node
};

export default App;
