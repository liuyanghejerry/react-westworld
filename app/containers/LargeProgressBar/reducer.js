/*
 *
 * LargeProgressBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  title: 'bulk apperception',
  min: 0,
  max: 20,
  current: 6
});

function largeProgressBarReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default largeProgressBarReducer;
