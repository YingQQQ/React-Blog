import React from 'react';
import Article from '../components/Article';
import Aside from '../components/Aside';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';

const justifyType = {
  around: 'justifyaround',
};

export default() => {
  return (
    <main>
      <Row justifyType={justifyType.around}>
        <Col xs={7} >
          <Article />
          <Article />
          <Article />
        </Col>
        <Col xs={4}>
          <Aside />
          <Aside />
          <Aside />
        </Col>
      </Row>
    </main>
  );
};
