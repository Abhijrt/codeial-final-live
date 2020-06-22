import React from 'react';
import { fetchPosts } from '../actions/posts';
import { connect } from 'react-redux';
import { PostsList } from './';
import PropTypes from 'prop-types';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    console.log('PROPS', this.props);
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.PropTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
