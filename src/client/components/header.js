import React from 'react';
import { Link } from 'react-router';
import Row from './Grid/Row';
import Col from './Grid/Col';

const justifyType = {
  between: 'justify-between',
  end: 'justify-end'
};
const alignType = {
  center: 'align-center',
  end: 'align-end'
};
const lists = ['Home', 'Blog', 'About', 'Contact'];

export default() => {
  return (
    <header className="boxShadow default-margin">
      <Row justifyType={justifyType.between} alignType={alignType.center}>
        <Col xs={4} >
          <h1>Black & White</h1>
        </Col>
        <Col xs={8}>
          <Row justifyType={justifyType.end} alignType={alignType.center} >
            <Col xs={6} className="header-hover">
              { lists.map((list, i) => {
                const cur = list.toLowerCase();
                return <Link to={cur === 'home' ? '/' : `/${cur}`} key={i} >{list}</Link>;
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};
