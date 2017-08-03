import { combineReducers } from 'redux';

import runtime from './runtime';
import groups from './groups';
import users from './users';
import news from './home';

export default combineReducers({
  runtime,
  groups,
  users,
  news
});
