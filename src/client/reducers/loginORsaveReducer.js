import {
  REQUEST_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from '../constants/typesActions';

const initialState = {
  isAuthenticated: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_REQUEST:
      return { ...state
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true,
        errors: action.err
      };
    case REQUEST_FAILURE:
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
