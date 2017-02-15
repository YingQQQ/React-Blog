import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Article from '../components/Article';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';

const justifyType = {
  around: 'around',
};

class Blog extends Component {
  render() {
    const { posts } = this.props;
    return (
      <main>
        <Row justifyType={justifyType.around}>
          <Col xs={9} >
            {posts.map((post, i) =>
              <Article post={post} key={i} substring={true} hasButton={true} />)}
          </Col>
        </Row>
      </main>
    );
  }
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  state => ({
    posts: state.posts.posts,
    loaded: state.posts.loaded
  })
)(Blog);
