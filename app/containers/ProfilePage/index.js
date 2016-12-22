/*
 *
 * ProfilePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Profile from '../../components/Profile';

const metrics = [
  {
    metricType: 'text',
    title: 'CPU 1',
    content: '123'
  },
  {
    metricType: 'column',
    title: 'CPU 2',
    data: [10, 23, 12, 3, 45, 14, 86]
  },
  {
    metricType: 'text',
    title: 'GPU 1',
    content: '123'
  },
  {
    metricType: 'column',
    title: 'GPU 2',
    data: [10, 23, 12, 3, 45, 14, 86]
  },
  {
    metricType: 'heat',
    title: 'Fan 1',
    value: 7
  },
  {
    metricType: 'progress',
    title: 'Upload 1',
    value: 29
  }
];

const tags = ['fixed', 'old generation', 'alive'];

const liveStatusInfo = {
  title: 'live status',
  liveStatuses: [
    {
      title: 'Live 1',
      maxX: 500,
      maxY: 150,
      data: [
        [0, 120],
        [20, 60],
        [40, 80],
        [60, 20],
        [80, 80],
        [100, 80],
        [120, 60],
        [140, 100],
        [160, 90],
        [180, 80],
        [200, 110],
        [220, 10],
        [240, 70],
        [260, 100],
        [280, 100],
        [300, 40],
        [320, 0],
        [340, 100],
        [360, 100],
        [380, 120],
        [400, 60],
        [420, 70],
        [440, 80],
      ],
    },
    {
      title: 'Live 2',
      maxX: 500,
      maxY: 150,
      data: [
        [0, 120],
        [20, 60],
        [40, 80],
        [60, 20],
        [80, 80],
        [100, 80],
        [120, 60],
        [140, 100],
        [160, 90],
        [180, 80],
        [200, 110],
        [220, 10],
        [240, 70],
        [260, 100],
        [280, 100],
        [300, 40],
        [320, 0],
        [340, 100],
        [360, 100],
        [380, 120],
        [400, 60],
        [420, 70],
        [440, 80],
      ],
    },
    {
      title: 'Live 3',
      maxX: 500,
      maxY: 150,
      data: [
        [0, 120],
        [20, 60],
        [40, 80],
        [60, 20],
        [80, 80],
        [100, 80],
        [120, 60],
        [140, 100],
        [160, 90],
        [180, 80],
        [200, 110],
        [220, 10],
        [240, 70],
        [260, 100],
        [280, 100],
        [300, 40],
        [320, 0],
        [340, 100],
        [360, 100],
        [380, 120],
        [400, 60],
        [420, 70],
        [440, 80],
      ],
    },
    {
      title: 'Live 4',
      maxX: 500,
      maxY: 150,
      data: [
        [0, 120],
        [20, 60],
        [40, 80],
        [60, 20],
        [80, 80],
        [100, 80],
        [120, 60],
        [140, 100],
        [160, 90],
        [180, 80],
        [200, 110],
        [220, 10],
        [240, 70],
        [260, 100],
        [280, 100],
        [300, 40],
        [320, 0],
        [340, 100],
        [360, 100],
        [380, 120],
        [400, 60],
        [420, 70],
        [440, 80],
      ],
    }
  ]
};

export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Profile
          hostId={'Host id:AC273812'}
          tags={tags}
          metrics={metrics}
          liveStatusInfo={liveStatusInfo} />
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
