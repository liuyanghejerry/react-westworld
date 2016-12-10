/*
 *
 * StatusPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  bulkApperception: {
    title: 'bulk apperception',
    min: 1,
    max: 20,
    current: 14
  },
  aggression: {
    title: 'aggression',
    min: 0,
    max: 20,
    current: 6
  },
  loyalty: {
    title: 'loyalty',
    min: 0,
    max: 20,
    current: 17
  },
  cordination: {
    title: 'cordination',
    min: 0,
    max: 20,
    current: 12
  },
  selfPreservation: {
    title: 'self preservation',
    min: 0,
    max: 20,
    current: 12
  }
});

function statusPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default statusPageReducer;
