import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


class Col extends Component {
  render() {
    // {1,2,3,4,false,'width:120px'}
    const { xs, sm, md, lg, offset, auto, children, className, ...others } = this.props;
    const klasses = classNames({
      [`col-xs-${xs}`]: xs !== undefined,
      [`col-sm-${sm}`]: sm !== undefined,
      [`col-md-${md}`]: md !== undefined,
      [`col-lg-${lg}`]: lg !== undefined,
      [`col-offset-${lg}`]: offset !== undefined,
      'col-auto': auto !== undefined,
    }, className);
    return (
      <div className={klasses} {...others}>
        {children}
      </div>
    );
  }
}
Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  sm: PropTypes.number,
  offset: PropTypes.number,
  auto: PropTypes.bool
};

export default Col;
