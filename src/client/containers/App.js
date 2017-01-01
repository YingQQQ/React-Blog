import React, { Component, PropTypes } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { grey50, grey900 } from 'material-ui/styles/colors';
import Header from '../components/header';

// const selfMuiTheme = {
//   palette: {
//     primary1Color: grey50,
//     alternateTextColor: grey900,
//     canvasColor: grey900
//   }
// };

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
