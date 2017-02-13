import React from 'react';
// import Article from '../components/Article';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';
import LoginForm from '../components/LoginForm';

const fetchUrl = 'http://localhost:3000/api/login';

export default() => {
  return (
    <main className="boxShadow">
      <Row>
        <Col xs={4} className="login">
          <h3>Log in to your account</h3>
          <LoginForm fetchUrl={fetchUrl} />
        </Col>
      </Row>
    </main>
  );
};
