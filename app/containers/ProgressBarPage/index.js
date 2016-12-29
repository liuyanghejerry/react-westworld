/*
 *
 * LargeProgressBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import {
  selectLargeTitle,
  selectLargeMin,
  selectLargeMax,
  selectLargeCurrent,

  selectSmallTitle,
  selectSmallMin,
  selectSmallMax,
  selectSmallCurrent,
} from './selectors';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import {LargeProgressBar, SmallProgressBar} from '../../components/HorizontalProgressBar';

const Layout = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: space-around;
`;

export class ProgressBarPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout>
        <LargeProgressBar min={this.props.largeMin} max={this.props.largeMax} current={this.props.largeCurrent} title={this.props.largeTitle} />
        <SmallProgressBar min={this.props.smallMin} max={this.props.smallMax} current={this.props.smallCurrent} title={this.props.smallTitle} />
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  largeTitle: selectLargeTitle(),
  largeMin: selectLargeMin(),
  largeMax: selectLargeMax(),
  largeCurrent: selectLargeCurrent(),

  smallTitle: selectSmallTitle(),
  smallMin: selectSmallMin(),
  smallMax: selectSmallMax(),
  smallCurrent: selectSmallCurrent(),
});

function mapDispatchToProps(/*dispatch*/) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarPage);
