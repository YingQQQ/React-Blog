import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MarkdownEle from './MarkdownEle';


const Article = ({ post, hasButton, substring }) => {
  return (
    <section className="boxShadow">
      <header>
        <h1>
          <Link to={`/blog/${post._id}`}>{post.title}</Link>
        </h1>
        <time>{post.meta.creatAt.substring(0, 10)}</time>
      </header>
      <MarkdownEle text={substring ? post.post.substring(0, 100) : post.post} />
      { hasButton ?
        <div className="button">
          <Link to={`/blog/${post._id}`} >Continue reading</Link>
        </div> :
        null
      }
    </section>
  );
};

Article.propTypes = {
  post: PropTypes.object.isRequired,
  hasButton: PropTypes.bool,
  substring: PropTypes.bool
};
export default Article;
