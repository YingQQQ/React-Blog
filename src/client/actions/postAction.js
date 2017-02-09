import fetch from 'isomorphic-fetch';
import {
  REQUEST_POSTS,
  REQUEST_POSTS_FAILED,
  REQUEST_POSTS_SUCCEED
} from '../constants/typesActions';

const fetchUrl = 'http://localhost:3000/api/posts';

export const stateRequest = () => {
  return {
    type: REQUEST_POSTS
  };
};


export const stateSuccessd = (data) => {
  return {
    type: REQUEST_POSTS_SUCCEED,
    data
  };
};

export const stateFailed = (err) => {
  return {
    type: REQUEST_POSTS_FAILED,
    err
  };
};

const fetchState = () => {
  return (dispatch) => {
    dispatch(stateRequest());
    return fetch(fetchUrl)
      .then(response => response.json())
      .then(data => dispatch(stateSuccessd(data)))
      .catch(e => dispatch(stateFailed(e)));
  };
};

export default (state) => {
  return (dispatch) => {
    if (!state.loaded) {
      return dispatch(fetchState());
    }
    return dispatch(stateSuccessd(state.posts));
  };
};
