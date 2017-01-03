import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

function type(justifyType, alignType) {
  if (justifyType === undefined && alignType === undefined) {
    console.log('type false');
    return false;
  }
  const justify = (justifyType && justifyType.includes('justify'))
    ? 'justify'
    : '';
  const justifyName = justify && justifyType.slice(7);
  console.log(justifyName);
  const align = (alignType && alignType.includes('align'))
    ? 'align'
    : '';
  const alignName = align && alignType.slice(5);
  const flexJustify = { [`${justify}-${justifyName}`]: justifyType !== undefined };
  const flexAlign = { [`${align}-${alignName}`]: alignType !== undefined };
  console.log(flexJustify, flexAlign);
  return { flexJustify, flexAlign };
}

class Row extends Component {
  componentDidMount() {
    console.log('in Grid');
  }
  render() {
    // {'width:120px', justifyend, alignend,}
    const { className, justifyType, alignType } = this.props;
    const { flexJustify, flexAlign } = type(justifyType, alignType);
    const klasses = classNames(flexJustify, flexAlign, 'container', className);
    return (
      <div className={klasses} >
        {this.props.children}
      </div>
    );
  }
}
Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  justifyType: PropTypes.string,
  alignType: PropTypes.string
};

export default Row;
