import React from 'react';
import Article from '../components/Article';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';

const justifyType = {
  around: 'justifyaround',
};

export default() => {
  return (
    <main>
      <Row justifyType={justifyType.around}>
        <Col xs={10} >
          <Article />
          <Article />
          <Article />
        </Col>
      </Row>
    </main>
  );
};
