import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import messages from './messages';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  messages
});