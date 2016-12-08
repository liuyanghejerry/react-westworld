/**
*
* HorizontalProgressBar
*
*/

import React from 'react';
import lodash from 'lodash';
import cs from 'classnames';
import styled from 'styled-components';
import colors from '../../color-scheme';

const ITEM_SIZE = 18;
const COMMON_MARGIN = 10;

const Layout = styled.div`
  display: flex;
  align-items: flex-end;
`;

const List = styled.ul`
  color: ${colors.mainTextColor};
`;

const Item = styled.li`
  width: ${ITEM_SIZE}px;
  height: ${ITEM_SIZE}px;
  margin: ${COMMON_MARGIN}px 0;
  border: ${colors.mainTextColor};
  &:last-child {
    margin: 0;
  }
  &:first-child {
    margin-top: 0;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: ${colors.mainTextColor};
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-transform: uppercase;
`;

const SegmentList = styled(List)``;

const SegmentItem = styled.li`
  width: ${ITEM_SIZE}px;
  height: ${ITEM_SIZE}px;
  margin: ${COMMON_MARGIN}px 0;
  border: 1px solid ${colors.mainTextColor};
  background: ${(props) => props.filled ? colors.mainTextColor : 'transparent'};
  position: relative;
  &:last-child {
    margin: 0;
  }
  &:first-child {
    margin-top: 0;
  }
  &::before {
    display: block;
    content: '-';
    position: absolute;
    right: 0;
    transform: translateX(${COMMON_MARGIN}px);
    color: ${colors.mainTextColor};
  }
`;

const LINE_MARGIN = 18;
const LINE_END_STYLE = `
  display: block;
  content: '';
  width: 8px;
  height: 8px;
  background: ${colors.mainTextColor};
  margin-right: -4px;
  box-sizing: border-box;
`;
const Line = styled.div`
  height: ${(props) => {
    return props.length * (ITEM_SIZE + COMMON_MARGIN) - COMMON_MARGIN  - LINE_MARGIN * 2 + 6
  }}px;
  align-self: flex-start;
  box-sizing: border-box;
  margin: 0 ${COMMON_MARGIN}px;
  margin-top: ${LINE_MARGIN}px;
  border-right: 1px solid ${colors.mainTextColor};
  position: relative;
  &::before {
    ${LINE_END_STYLE}
    transform: translateY(-${COMMON_MARGIN}px);
  }
  &::after {
    ${LINE_END_STYLE}
    position: absolute;
    bottom: 0;
    transform: translateY(${COMMON_MARGIN}px);
  }
`;

function renderSegments(totalCount, current) {
  var items = lodash.range(totalCount);
  return items.map((item, index) => {
    return (<SegmentItem key={index} filled={index > totalCount - current}></SegmentItem>);
  });
}

function renderDataLabels(min, max) {
  var items = lodash.range(max - min + 1);
  return items.map((item, index) => {
    return (<Item key={index}>{max - (min + index)}</Item>);
  });
}

function HorizontalProgressBar({min, max, current, title}) {
  return (
    <Layout>
      <Title>{title}</Title>
      <SegmentList>{renderSegments(max - min + 1, current)}</SegmentList>
      <Line length={max - min + 1}></Line>
      <List>{renderDataLabels(min, max)}</List>
    </Layout>
  );
}

export default HorizontalProgressBar;
