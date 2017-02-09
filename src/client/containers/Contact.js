import React from 'react';
// import Article from '../components/Article';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';
import LoginForm from '../components/LoginForm';

const justifyType = {
  around: 'justifyaround',
};

export default() => {
  return (
    <main className="boxShadow">
      <Row justifyType={justifyType.around}>
        <Col xs={4} className="login">
          <h3>Log in to your account</h3>
          <LoginForm />
        </Col>
      </Row>
    </main>
  );
};
