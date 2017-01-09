import React from 'react';
import { Link } from 'react-router';
import Row from './Grid/Row';
import Col from './Grid/Col';

const post = '我年纪越大，就越觉得那些心理阴暗，一肚子心计，满脑子阴谋论的人，是因为智力不够。这和我小时候的认识是大致相反的。尽管存在个体差异，但是整体上，足够聪明的，进化得更好的人群，通常会倾向于选择公平、正义，更容易具有坦诚、善良的品质。——罗永浩我年纪越大，就越觉得那些心理阴暗，一肚子心计，满脑子阴谋论的人，是因为智力不够。这和我小时候的认识是大致相反的。尽管存在个体差异，但是整体上，足够聪明的，进化得更好的人群，通常会倾向于选择公平、正义，更容易具有坦诚、善良的品质。——罗永浩';

const justifyType = {
  center: 'justifycenter',
};
const alignType = {
  center: 'aligncenter',
};
export default() => {
  return (
    <article className="boxShadow">
      <Row column={true} alignType={alignType.center}>
        <header>
          <h1>
            <Link to="/">Adaptive Vs. Responsive Layouts And Optimal Text Readability</Link>
          </h1>
          <Row justifyType={justifyType.center}>
            <Col xs={3}>
              <span>Web Design</span>
            </Col>
            <Col xs={3}>
              <span>February 2, 2013</span>
            </Col>
          </Row>
        </header>
        <p>{post}</p>
        <div className="button">
          <Link to="/" >Continue reading</Link>
        </div>
      </Row>
    </article>
  );
};
