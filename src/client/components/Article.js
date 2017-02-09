import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Row from './Grid/Row';
import Col from './Grid/Col';


const justifyType = {
  center: 'justifycenter',
};
const alignType = {
  center: 'aligncenter',
};
const Article = ({ post }) => {
  return (
    <article className="boxShadow">
      <Row column={true} alignType={alignType.center}>
        <header>
          <h1>
            <Link to="/">{post.title}</Link>
          </h1>
          <Row justifyType={justifyType.center}>
            <Col xs={3}>
              <span>Web Design</span>
            </Col>
            <Col xs={3}>
              <span>{post.date}</span>
            </Col>
          </Row>
        </header>
        <p>{post.post}</p>
        <div className="button">
          <Link to="/" >Continue reading</Link>
        </div>
      </Row>
    </article>
  );
};
Article.propTypes = {
  post: PropTypes.object.isRequired
};
export default Article;
