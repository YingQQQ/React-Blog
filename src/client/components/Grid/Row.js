import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { justifyHooks, alignHooks } from '../../utils/flexHooks';

class Row extends Component {
  render() {
    // {'width:120px', 'justify-end', 'align-end'}
    const {
      justifyType,
      alignType,
      children,
      className,
      column,
      ...others
    } = this.props;
    const klasses = classNames({
      'flex-column': column,
      [`${justifyHooks[justifyType]}`]: justifyType !== undefined,
      [`${alignHooks[alignType]}`]: alignType !== undefined
    }, 'container', className);
    return (
      <div className={klasses} {...others}>
        {children}
      </div>
    );
  }
}
Row.propTypes = {
  children: PropTypes.node,
  justifyType: PropTypes.string,
  alignType: PropTypes.string,
  className: PropTypes.string,
  column: PropTypes.bool
};

export default Row;
