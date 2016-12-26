/**
*
* Profile
*
*/

import React from 'react';
import styled from 'styled-components';
import {merge, uniq} from 'lodash';
// TODO: import Gradient from 'gradient'; is broken
import Gradient from 'gradient/lib/gradient';
import colors from '../../color-scheme';
import TextMetric from './TextMetric';
import ColumnChartMetric from './ColumnChartMetric';
import HeatMetric from './HeatMetric';
import ProgressMetric from './ProgressMetric';
import Tag from './Tag';
import LiveStatus from './LiveStatus';
import Label from './Label';
import LiveNumber from './LiveNumber';

const INFO_BOX_WIDTH = 500;
const INFO_BOX_HEIGHT = 140;
const TRIANGO_TOP_OVERFLOW = 8;

function AvatorBox({hostId}) {
  const OuterBox = styled.div`
    width: ${INFO_BOX_HEIGHT}px;
    height: ${INFO_BOX_HEIGHT}px;
    float: left;
    shape-outside: circle();
    position: relative;
    top: -4px;
    left: -4px;
    margin-right: -4px;
    border: 4px solid ${colors.mainTextColorLight};
    border-radius: 100%;
  `;

  const ID_FONT_SIZE = 20;

  const InnerBox = styled.div`
    width: ${INFO_BOX_HEIGHT - ID_FONT_SIZE * 2}px;
    height: ${INFO_BOX_HEIGHT - ID_FONT_SIZE * 2}px;
    position: absolute;
    top: ${-4 + ID_FONT_SIZE}px;
    left: ${-4 + ID_FONT_SIZE}px;
    border: 4px solid ${colors.mainTextColorLight};
    border-radius: 100%;
  `;

  function CircleIdLabel({label}) {
    const radius = INFO_BOX_HEIGHT - ID_FONT_SIZE * 2;
    const textRadius = radius - ID_FONT_SIZE / 2;
    const Layout = styled.div`
      width: ${radius}px;
      height: ${radius}px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(${textRadius / 2}px);
      text-transform: uppercase;
      color: ${colors.mainTextColorWhite};
    `;

    const totalCount = [...label].length;
    const charUnits = [...label].map((char, index) => {
      const Unit = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 1em;
        height: 1em;
        transform: rotate(${(index + 2) * 10}deg);
        transform-origin: 0 -${textRadius / 2}px;
      `;
      const Char = styled.div`
        transform: rotate(180deg);
      `;
      return <Unit key={index}><Char>{char}</Char></Unit>;
    });

    return (
      <Layout>
        {charUnits}
      </Layout>
    );
  }

  const Avator = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: relative;
    opacity: 0.4;
  `;

  const TrippleTriango = styled.div`
    width: 0;
    height: 0;
    margin: 0 auto;
    margin-top: -${TRIANGO_TOP_OVERFLOW}px;
    border: 30px solid ${colors.mainTextColor};
    border-top-width: 35px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom: none;
    position: relative;

    &:before {
      display: block;
      content: '';
      width: 0;
      height: 0;
      border: 24px solid ${colors.mainBackgroundColor};
      border-top-width: 30px;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom: none;
      position: absolute;
      top: -33px;
      left: -24px;
      z-index: 1;
    }
    &:after {
      display: block;
      content: '';
      width: 0;
      height: 0;
      border: 17px solid ${colors.textNumberGreen};
      border-top-width: 21px;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom: none;
      position: absolute;
      top: -30px;
      left: -17px;
      z-index: 1;
    }
  `;

  return (
    <OuterBox>
      <InnerBox>
        <Avator src={require('./avatar.svg')} />
      </InnerBox>
      <CircleIdLabel label={hostId} />
      <TrippleTriango />
    </OuterBox>
  );
}

function DetailBox({metrics}) {
  const metricTypeMap = {
    'text': TextMetric,
    'column': ColumnChartMetric,
    'heat': HeatMetric,
    'progress': ProgressMetric,
  };

  const Layout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 4px;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: ${colors.mainTextColorWhite};
  `;

  return (
    <Layout>
      {metrics.map((metric, index) => {
        const props = merge(metric, {key: index});
        const Metric = metricTypeMap[metric.metricType];
        return <Metric {...props}/>;
      })}
    </Layout>
  );
}

function TagBox({tags}) {
  const Layout = styled.div`
    margin-top: 4px;
    color: ${colors.mainTextColorWhite};
  `;
  const InnerLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
  `;
  return (
    <Layout>
      <InnerLayout>
        {
          tags.map((tag, index) => {
            return <Tag key={index} content={tag}/>;
          })
        }
      </InnerLayout>
    </Layout>
  );
}

function LiveStatusBox({liveStatusInfo}) {
  const Layout = styled.div`
    display: flex;
    padding: 4px 0 4px 4px;
    line-height: 1;
    font-size: 12px;
    line-height: 12px;
    border-top: 2px solid ${colors.mainTextColorLight};
  `;
  const BlockLabel = styled(Label)`
    display: block;
    color: ${colors.mainTextColorWhite};
  `;
  return (
    <Layout>
      <div>
        <BlockLabel>{liveStatusInfo.title}</BlockLabel>
        {liveStatusInfo.liveStatuses.map((liveStatus) => {
          return <LiveStatus
            key={liveStatus.title}
            title={liveStatus.title}
            maxX={liveStatus.maxX}
            maxY={liveStatus.maxY}
            data={liveStatus.data} />;
        })}
      </div>
    </Layout>
  );
}

function LiveNumbersBox({liveNumbers}) {
  const Layout = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 2px solid ${colors.mainTextColorLight};
  `;
  const colorStops = uniq(Gradient(colors.textNumberGreen, colors.mainTextColor, colors.mainTextColorWhite, liveNumbers.length + 1).toArray('hexString'));
  return (
    <Layout>
      {liveNumbers.map((liveNumber, index) => {
        return <LiveNumber key={index} {...liveNumber}  color={colorStops[index]} />;
      })}
    </Layout>
  );
}

function Profile({hostId, metrics, tags, liveStatusInfo, liveNumbers}) {
  const Layout = styled.div`
    width: ${INFO_BOX_WIDTH}px;
    min-height: ${INFO_BOX_HEIGHT}px;
    margin-top: ${TRIANGO_TOP_OVERFLOW}px;
    position: relative;
    border: 4px solid ${colors.mainTextColorWhite};
    border-radius: 10px;
    border-top-left-radius: ${INFO_BOX_HEIGHT}px;
    border-bottom-left-radius: ${INFO_BOX_HEIGHT}px;
  `;
  return (
    <Layout>
      <AvatorBox hostId={hostId} />
      <DetailBox metrics={metrics}/>
      <TagBox tags={tags}/>
      <LiveStatusBox liveStatusInfo={liveStatusInfo}/>
      <LiveNumbersBox liveNumbers={liveNumbers} />
    </Layout>
  );
}

export default Profile;
