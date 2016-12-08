/*
 *
 * LargeProgressBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectTitle,
  selectMin,
  selectMax,
  selectCurrent
} from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import HorizontalProgressBar from  '../../components/HorizontalProgressBar';

export class LargeProgressBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<HorizontalProgressBar min={this.props.min} max={this.props.max} current={this.props.current} title={this.props.title}/>);
  }
}

const mapStateToProps = createStructuredSelector({
  title: selectTitle(),
  min: selectMin(),
  max: selectMax(),
  current: selectCurrent(),
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LargeProgressBar);
