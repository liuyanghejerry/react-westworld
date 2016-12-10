/*
 *
 * PropertyCirclePage
 *
 */

import React from 'react';
import {random, shuffle} from 'lodash';
import { connect } from 'react-redux';
import PropertyCircle from '../../components/PropertyCircle';

import {Personality} from '../../corpus';

const properties = shuffle(Personality).slice(0, 48).map((personality) => {
  return {
    label: personality,
    percentage: random(0, 100),
    checked: false
  }
});


export class PropertyCirclePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PropertyCircle properties={properties}></PropertyCircle>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PropertyCirclePage);
