import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.context.router.push('/login');
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }
    render() {
      return (
        <ComposedComponent
          {...this.props}
        />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool
  };

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => {
    return { isAuthenticated: state.Auth.isAuthenticated };
  };
  return connect(mapStateToProps)(Authenticate);
};
