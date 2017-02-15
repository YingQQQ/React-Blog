import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Article from '../components/Article';
import Aside from '../components/Aside';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';
import Loader from '../components/Loader';
import selfMap from '../utils/selfMap';

const justifyType = 'around';

class Home extends Component {
  render() {
    const { posts, loaded } = this.props;
    if (!loaded) {
      return (
        <main>
          <Loader />
        </main>
      );
    }
    return (
      <main>
        <Row justifyType={justifyType}>
          <Col xs={7} >
            {selfMap((post, i) =>
              <Article post={post} key={i} substring={true} hasButton={true} />, posts, 4)}
          </Col>
          <Col xs={4}>
            <Aside posts={posts} />
          </Col>
        </Row>
      </main>
    );
  }
}
Home.propTypes = {
  loaded: PropTypes.bool,
  posts: PropTypes.arrayOf(PropTypes.object),
};


export default connect(
  state => ({
    posts: state.posts.posts,
    loaded: state.posts.loaded
  })
)(Home);
