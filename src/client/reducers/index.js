import {
  combineReducers
} from 'redux';
import {
  routerReducer
} from 'react-router-redux';
import posts from './postReducer';
import auth from './loginORsaveReducer';


export default combineReducers({
  routing: routerReducer,
  posts,
  auth
});
