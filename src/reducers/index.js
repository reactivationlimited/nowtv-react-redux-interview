import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as messages } from './messages';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  messages
});