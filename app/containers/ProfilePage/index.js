/*
 *
 * ProfilePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import { genLiveStatusLineData } from './utils';

const metrics = [
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
];

const tags = ['fixed', 'old generation', 'alive'];

const liveStatusInfo = {
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
};

const liveNumbers = [
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
];

export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Profile
          hostId={'Host id:AC273812'}
          tags={tags}
          metrics={metrics}
          liveStatusInfo={liveStatusInfo}
          liveNumbers={liveNumbers}
        />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ProfilePage);
