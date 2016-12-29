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
  largeProgressBar: {
    title: 'bulk apperception',
    min: 1,
    max: 20,
    current: 14,
  },
  smallProgressBar: {
    title: 'bulk apperception',
    min: 0,
    max: 20,
    current: 5,
  },
});

function progressBarPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default progressBarPageReducer;
