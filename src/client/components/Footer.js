import React from 'react';
import Row from './Grid/Row';
import Col from './Grid/Col';

const justifyType = {
  around: 'justify-around',
  center: 'justify-center'
};


export default() => {
  return (
    <footer className="boxShadow default-margin">
      <Row justifyType={justifyType.center}>
        <Col xs={5} >
          <Row justifyType={justifyType.around}>
            <p>© 2016 created by Y </p>
            <a href="https://github.com/YingQQQ" target="_blank" rel="noopener noreferrer" className="ion-hover"><i className="ion-social-github" /></a>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};
