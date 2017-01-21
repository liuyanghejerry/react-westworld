/*
 *
 * HeaderPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';

export class HeaderPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HeaderPage);
