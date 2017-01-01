import React from 'react';
import { Link } from 'react-router';
// import AppBar from 'material-ui/AppBar';
import Row from './Grid/Row';
import Col from './Grid/Col';

export default () => {
  return (
    <Row>
      <Col lg={6} md={6} xs={6}>
        <Link to="/">Home</Link>
      </Col>
      <Col lg={6} md={6} xs={6}>
        <Link to="/">about</Link>
      </Col>
    </Row>
  );
};
