import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

function type(justifyType, alignType) {
  if (justifyType === undefined && alignType === undefined) {
    return false;
  }
  console.log('type true');
  const justify = (justifyType && justifyType.includes('justify'))
    ? 'justify'
    : undefined;
  const justifyName = justify && justifyType.slice(7);

  const align = (alignType && alignType.includes('align'))
    ? 'align'
    : undefined;
  const alignName = align && alignType.slice(5);
  const flexJustify = { [`${justify}-${justifyName}`]: justify !== undefined };
  const flexAlign = { [`${align}-${alignName}`]: align !== undefined };
  return { flexJustify, flexAlign };
}

class Row extends Component {
  componentDidMount() {
    console.log('in Grid');
  }
  render() {
    // {'width:120px', justifyend, alignend,}
    const { justifyType, alignType, children, ...others } = this.props;
    const { flexJustify, flexAlign } = type(justifyType, alignType);
    const klasses = classNames(flexJustify, flexAlign, 'container');
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
  alignType: PropTypes.string
};

export default Row;
