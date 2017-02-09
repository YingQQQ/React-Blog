import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/typesActions';

const initialState = {
  isAuthenticated: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true,
        errors: action.err
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errors: action.err
      };
    default:
      return state;
  }
};
