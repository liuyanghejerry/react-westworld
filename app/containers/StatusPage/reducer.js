/*
 *
 * StatusPage reducer
 *
 */

import { fromJS } from 'immutable';
import {random, shuffle} from 'lodash';
import {Personality} from '../../corpus';
import {genLiveStatusLineData} from '../ProfilePage/utils';
import {
  DEFAULT_ACTION,
} from './constants';

const personalities = shuffle(Personality).slice(0, 94).map((personality) => (
  {
    label: personality,
    percentage: random(0, 100),
    checked: false,
  }
));

const initialState = fromJS({
  bulkApperception: {
    title: 'bulk apperception',
    min: 1,
    max: 20,
    current: 14,
  },
  aggression: {
    title: 'aggression',
    min: 0,
    max: 20,
    current: 6,
  },
  loyalty: {
    title: 'loyalty',
    min: 0,
    max: 20,
    current: 17,
  },
  cordination: {
    title: 'cordination',
    min: 0,
    max: 20,
    current: 12,
  },
  selfPreservation: {
    title: 'self preservation',
    min: 0,
    max: 20,
    current: 12,
  },
  personalities,
  selectedItem: {
    outerLabel: 'amnt:[0]%',
    innerLabel: 'prblty:[0]%',
    title: 'Bulk Apperception',
  },
  profile: {
    hostId: 'Host id:AC273812',
    tags: ['fixed', 'old generation', 'alive'],
    metrics: [
      {
        metricType: 'text',
        title: 'CPU 1',
        content: '123',
      },
      {
        metricType: 'column',
        title: 'CPU 2',
        data: [10, 23, 12, 3, 45, 14, 86],
      },
      {
        metricType: 'text',
        title: 'GPU 1',
        content: '123',
      },
      {
        metricType: 'column',
        title: 'GPU 2',
        data: [10, 23, 12, 3, 45, 14, 86],
      },
      {
        metricType: 'heat',
        title: 'Fan 1',
        value: 7,
      },
      {
        metricType: 'progress',
        title: 'Upload 1',
        value: 29,
      },
    ],
    liveStatusInfo: {
      title: 'live status',
      liveStatuses: [
        {
          title: 'Live 1',
          maxX: 20 * 120,
          maxY: 120,
          data: genLiveStatusLineData(120, 20, 120),
        },
        {
          title: 'Live 2',
          maxX: 20 * 120,
          maxY: 120,
          data: genLiveStatusLineData(120, 20, 120),
        },
        {
          title: 'Live 3',
          maxX: 20 * 120,
          maxY: 120,
          data: genLiveStatusLineData(120, 20, 120),
        },
        {
          title: 'Live 4',
          maxX: 20 * 120,
          maxY: 120,
          data: genLiveStatusLineData(120, 20, 120),
        },
      ],
    },
    liveNumbers: [
      {
        title: 'HP',
        value: 110,
        min: 80,
        max: 140,
      },
      {
        title: 'MP',
        value: 92,
        min: 60,
        max: 100,
      },
      {
        title: 'RR',
        value: 40,
        min: 30,
        max: 60,
      },
    ],
  },
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
