import React from 'react';
import Row from '../components/Grid/Row';
import JPG from '../static/images/me.jpg';

const alignType = {
  center: 'center'
};

export default() => {
  return (
    <main className="boxShadow" >
      <Row column={true} alignType={alignType.center}>
        <figure>
          <h1>About Me</h1>
          <img src={JPG} alt="me" />
          <figcaption>一只前端菜鸟</figcaption>
        </figure>
      </Row>
    </main>
  );
};
