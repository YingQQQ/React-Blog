import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Article from '../components/Article';
import Aside from '../components/Aside';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';


const justifyType = {
  around: 'justifyaround',
};
class Home extends Component {
  render() {
    const { posts, loaded } = this.props;
    console.log(posts);
    return (
      <main>
        <Row justifyType={justifyType.around}>
          <Col xs={7} >
            {posts.map((post, i) => <Article post={post} loaded={loaded} key={i} />)}
          </Col>
          <Col xs={4}>
            <Aside />
            <Aside />
            <Aside />
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
