import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Row from './Grid/Row';
import Col from './Grid/Col';
import Loader from './Loader';

const type = {
  center: 'center',
};

const Article = ({ post, loaded }) => {
  if (!loaded) {
    return (
      <Loader />
    );
  }
  return (
    <article className="boxShadow">
      <Row column={true} alignType={type.center}>
        <header>
          <h1>
            <Link to="/">{post.title}</Link>
          </h1>
          <Row justifyType={type.center}>
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
  post: PropTypes.object.isRequired,
  loaded: PropTypes.bool
};
export default Article;
