import React from 'react';
import { Link } from 'react-router';
import Row from './Grid/Row';
import Col from './Grid/Col';

const justifyType = {
  between: 'between',
  end: 'end'
};
const alignType = {
  center: 'center',
  end: 'end'
};
const lists = ['Home', 'Blog', 'About', 'Write'];

export default() => {
  return (
    <header className="boxShadow default-margin">
      <Row justifyType={justifyType.between} alignType={alignType.center}>
        <Col xs={4} >
          <Link to="/login">
            <h1>Black & White</h1>
          </Link>
        </Col>
        <Col xs={8}>
          <Row justifyType={justifyType.end} alignType={alignType.center} >
            <Col xs={5} className="header-hover">
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
