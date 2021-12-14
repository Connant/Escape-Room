
import browserHistory from 'store/browser-history';
import { ActionType } from 'const';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT) {
    browserHistory.push(action.payload);
  }
  return next(action);
};
