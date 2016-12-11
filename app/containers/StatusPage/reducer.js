/*
 *
 * StatusPage reducer
 *
 */

import { fromJS } from 'immutable';
import {random, shuffle} from 'lodash';
import {Personality} from '../../corpus';
import {
  DEFAULT_ACTION,
} from './constants';

const personalities = shuffle(Personality).slice(0, 94).map((personality) => {
  return {
    label: personality,
    percentage: random(0, 100),
    checked: false
  }
});

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
  },
  personalities: personalities,
  selectedItem: {
    outerLabel: 'amnt:[0]%',
    innerLabel: 'prblty:[0]%',
    title: 'Title',
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
