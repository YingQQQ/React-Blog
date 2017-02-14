import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Article from '../components/Article';

class Single extends Component {
  render() {
    const i = this.props.posts
          .findIndex(post => post._id === this.props.params.id);
    const post = this.props.posts[i];
    return (
      <main className="single-post">
        <Article post={post} key={i} hasButton={false} />
      </main>
    );
  }
}

Single.propTypes = {
  posts: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};

export default connect(
  state => ({
    posts: state.posts.posts
  })
)(Single);
