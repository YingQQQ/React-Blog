import React, { PropTypes } from 'react';
// import classNames from 'classnames';
import Row from './Grid/Row';
import Col from './Grid/Col';

// class Card extends Component {
//     return (
//       <Row className={className} justifyType={justifyType} alignType={alignType}>
//         <Col className={colKlass}>
//           {children}
//         </Col>
//       </Row>
//     );
//   }
// }
const Card = ({ justifyType, alignType, xs, sm, md, lg, offset, auto, ...others }) => {
  return (
    <Row justifyType={justifyType} alignType={alignType} {...others}>
      <Col xs={xs} sm={sm} md={md} lg={lg} offset={offset} auto={auto}>
        {this.props.children}
      </Col>
    </Row>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  justifyType: PropTypes.string,
  alignType: PropTypes.string,
  xs: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  sm: PropTypes.number,
  offset: PropTypes.number,
  auto: PropTypes.bool
};

export default Card;
