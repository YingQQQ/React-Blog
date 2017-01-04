import React from 'react';
import { Link } from 'react-router';
import Row from './Grid/Row';
import Col from './Grid/Col';

const justifyType = {
  between: 'justifybetween',
  end: 'justifyend'
};
const alignType = {
  center: 'aligncenter',
  end: 'alignend'
};
const lists = ['Home', 'Blog', 'About', 'Contact'];
export default() => {
  return (
    <header>
      <Row justifyType={justifyType.between} alignType={alignType.center}>
        <Col lg={4} >
          <div className="logo">
            <h1>Black & White</h1>
          </div>
        </Col>
        <Col lg={8}>
          <Row justifyType={justifyType.end}>
            <Col lg={6}>
              { lists.map((val, i) => {
                const cur = val.toLowerCase();
                return <Link to={cur === 'home' ? '/' : `/${cur}`} key={i}>{val}</Link>;
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};
