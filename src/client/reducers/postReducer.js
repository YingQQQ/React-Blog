import {
  REQUEST_POSTS,
  REQUEST_POSTS_FAILED,
  REQUEST_POSTS_SUCCEED
} from '../constants/typesActions';

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state
      };
    case REQUEST_POSTS_SUCCEED:
      return {
        loaded: true,
        success: true,
        posts: action.data.posts
      };
    case REQUEST_POSTS_FAILED:
      return {
        loaded: true,
        success: false,
        error: action.err
      };
    default:
      return state;
  }
};
