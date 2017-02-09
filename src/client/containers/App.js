import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import fetchStateIfNeed from '../actions/postAction';
import Header from '../components/Header';
import Footer from '../components/Footer';


class App extends Component {
  // static fetch(state, dispatch) {
  //   const fetchTasks = [];
  //   fetchTasks.push(
  //     dispatch(fetchStateIfNeed(state))
  //   );
  //   return fetchTasks;
  // }
  // componentDidMount() {
  //   const { loaded, success, dispatch } = this.props;
  //   if (!loaded || (loaded && !success)) {
  //     this.constructor.fetch(this.props, dispatch);
  //   }
  // }
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
  children: PropTypes.node,
  // loaded: PropTypes.bool,
  // success: PropTypes.bool,
  // dispatch: PropTypes.func,
};

export default App;
// export default connect(state => state.posts)(App);
