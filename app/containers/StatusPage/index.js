/*
 *
 * StatusPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectStatusPage from './selectors';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import messages from './messages';

import {LargeProgressBar, SmallProgressBar} from  '../../components/HorizontalProgressBar';
import PropertyCircle from  '../../components/PropertyCircle';

const Layout = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: space-around;
`;

const FakeRadar = styled.div`
  width: 500px;
  height: 500px;
`;
const FakeGroupContent = styled.div`
  width: 100px;
  height: 300px;
`;

const ProgressBarLayout = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 0 0 20px 0;
    &:last-child {
      margin: 0;
    }
  }
`;

export class StatusPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout>
        <PropertyCircle properties={this.props.personalities}></PropertyCircle>
        <FakeGroupContent></FakeGroupContent>

        <LargeProgressBar
          min={this.props.bulkApperception.min} max={this.props.bulkApperception.max} current={this.props.bulkApperception.current} title={this.props.bulkApperception.title}/>
        <ProgressBarLayout>
          <SmallProgressBar
            min={this.props.cordination.min} max={this.props.cordination.max} current={this.props.cordination.current} title={this.props.cordination.title}/>
          <SmallProgressBar
            min={this.props.aggression.min} max={this.props.aggression.max} current={this.props.aggression.current} title={this.props.aggression.title}/>
        </ProgressBarLayout>
        <ProgressBarLayout>
          <SmallProgressBar
            min={this.props.selfPreservation.min} max={this.props.selfPreservation.max} current={this.props.selfPreservation.current} title={this.props.selfPreservation.title}/>
          <SmallProgressBar
            min={this.props.loyalty.min} max={this.props.loyalty.max} current={this.props.loyalty.current} title={this.props.loyalty.title}/>
        </ProgressBarLayout>
      </Layout>
    );
  }
}

const mapStateToProps = selectStatusPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusPage);
