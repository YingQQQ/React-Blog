import React, { Component, PropTypes } from 'react';
// import classNames from 'classnames';

class Row extends Component {
  componentDidMount() {
    console.log('in Grid');
  }
  render() {
    // {'width:120px'}
    // const { className } = this.props;
    // const klasses = classNames('container', className);
    return (
      <div className="container" >
        {this.props.children}
      </div>
    );
  }
}
Row.propTypes = {
  children: PropTypes.node
  // className: PropTypes.string
};

export default Row;
