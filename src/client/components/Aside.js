import React from 'react';
import { Link } from 'react-router';
import Row from './Grid/Row';
// import Col from './Grid/Col';

export default() => {
  return (
    <aside className="boxShadow">
      <Row column={true}>
        <h3>最近文章</h3>
        <ul className="list-hover">
          <li>
            <Link to="/about">Adaptive Vs. Responsive Layouts And Optimal Text Readability</Link>
          </li>
          <li>
            <Link to="/about">Adaptive Vs. Responsive Layouts And Optimal Text Readability</Link>
          </li>
          <li>
            <Link to="/about">Adaptive Vs. Responsive Layouts And Optimal Text Readability</Link>
          </li>
        </ul>
      </Row>
    </aside>
  );
};
