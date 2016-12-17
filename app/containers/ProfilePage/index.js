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

const tags = ['fixed', 'old generation'];


export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Profile
          hostId={'Host id:AC273812'}
          tags={tags}
          metrics={metrics} />
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
