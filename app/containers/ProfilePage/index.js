/*
 *
 * ProfilePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Profile from '../../components/Profile';


export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Profile hostId={'Host id:AC27381236'} />
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
