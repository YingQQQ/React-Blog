import fetch from 'isomorphic-fetch';
import {
  REQUEST_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from '../constants/typesActions';

const requestLogin = () => {
  return {
    type: REQUEST_REQUEST,
  };
};


const succeedLogin = (data) => {
  return {
    type: REQUEST_SUCCESS,
    err: data.errors
  };
};

const loginError = (err) => {
  return {
    type: REQUEST_FAILURE,
    err
  };
};

export default (fetchUrl, creds) => {
  const config = {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(creds),
    headers: {
      'Accept': 'application/json ',
      'Content-Type': 'application/json'
    }
  };
  return (dispatch) => {
    dispatch(requestLogin());
    return fetch(fetchUrl, config)
      .then(response => response.json())
      .then(data => dispatch(succeedLogin(data)))
      .catch(e => dispatch(loginError(e)));
  };
};
