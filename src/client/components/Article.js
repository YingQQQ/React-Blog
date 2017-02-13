import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Row from './Grid/Row';
import Col from './Grid/Col';
import MarkdownEle from './MarkdownEle';

const styleType = 'center';

const Article = ({ post }) => {
  return (
    <article className="boxShadow">
      <Row column={true} alignType={styleType}>
        <header>
          <h1>
            <Link to="/">{post.title}</Link>
          </h1>
          <Row justifyType={styleType}>
            <Col xs={3}>
              <span>Web Design</span>
            </Col>
            <Col xs={3}>
              <time>{post.date}</time>
            </Col>
          </Row>
        </header>
        <MarkdownEle text={post.post} />
        <div className="button">
          <Link to="/" >Continue reading</Link>
        </div>
      </Row>
    </article>
  );
};
Article.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Article;
