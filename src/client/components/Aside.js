import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Row from './Grid/Row';
import selfMap from '../utils/selfMap';

const Aside = ({ posts }) => {
  return (
    <aside className="boxShadow">
      <Row column={true}>
        <h3>最近文章</h3>
        <ul className="list-hover">
          {
            selfMap((post, i) => {
              return (
                <li>
                  <Link to={`/blog/${post._id}`} key={i}>{post.title}</Link>
                </li>
              );
            }, posts, 4)
          }
        </ul>
      </Row>
    </aside>
  );
};

Aside.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};
export default Aside;
