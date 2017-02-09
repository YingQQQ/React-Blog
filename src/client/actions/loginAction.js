import fetch from 'isomorphic-fetch';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/typesActions';

const fetchUrl = 'http://localhost:3000/api/login';

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};


const succeedLogin = (data) => {
  return {
    type: LOGIN_SUCCESS,
    err: data.errors
  };
};

const loginError = (err) => {
  return {
    type: LOGIN_FAILURE,
    err
  };
};

export default (creds) => {
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
