import React from 'react';
import { Link } from 'react-router';
// import AppBar from 'material-ui/AppBar';
import Row from './Grid/Row';
import Col from './Grid/Col';

const justifyType = 'justifyend';
const alignType = 'aligncenter';
export default() => {
  return (
    <Row justifyType={justifyType} alignType={alignType} >
      <Col lg={4} md={6} xs={6}>
        <Link to="/">Home</Link>
      </Col>
      <Col lg={4} md={6} xs={6}>
        <Link to="/about">about!</Link>
      </Col>
    </Row>
  );
};
