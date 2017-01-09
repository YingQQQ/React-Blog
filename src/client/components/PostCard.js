import React from 'react';
import Row from './Grid/Row';
import Col from './Grid/Col';
import Article from './Article';

export default() => {
  return (
    <Row>
      <Col lg={8}>
        <Article />
      </Col>
      <Col lg={4}>
        <article>
          <header>
            <h1>you</h1>
          </header>
        </article>
      </Col>
    </Row>
  );
};
