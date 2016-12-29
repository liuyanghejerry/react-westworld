/**
*
* HorizontalProgressBar
*
*/

import React from 'react';
import lodash from 'lodash';
import styled from 'styled-components';
import colors from '../../color-scheme';

const ITEM_SIZE = 10;
const COMMON_MARGIN = 4;

const Layout = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const Title = styled.h3`
  margin: 0;
  flex-grow: 0;
  flex-shrink: 0;
  color: ${colors.mainTextColor};
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-transform: uppercase;
`;

const LINE_MARGIN = 10;
const LINE_END_STYLE = `
  display: block;
  content: '';
  width: 6px;
  height: 6px;
  background: ${colors.mainTextColor};
  margin-right: -3px;
  box-sizing: border-box;
`;
const Line = styled.div`
  height: ${(props) =>
     (props.length * (ITEM_SIZE + COMMON_MARGIN)) - (COMMON_MARGIN * 2)
  }px;
  align-self: flex-start;
  position: absolute;
  right: calc(2ch + ${COMMON_MARGIN / 2}px);
  box-sizing: border-box;
  margin-top: ${LINE_MARGIN}px;
  border-right: 1px solid ${colors.mainTextColor};
  &::before {
    ${LINE_END_STYLE}
  }
  &::after {
    ${LINE_END_STYLE}
    position: absolute;
    bottom: 0;
  }
`;

const SmallGrid = styled.div`
  width: 18px;
  height: ${ITEM_SIZE}px;
  border: 1px solid ${colors.mainTextColor};
  background: ${(props) => (props.filled ? colors.mainTextColor : 'transparent')};
`;

const Sign = styled.div`
  width: 1em;
  line-height: ${ITEM_SIZE}px;
  text-align: center;
`;

const SmallLabel = styled.div`
  width: 2ch;
  line-height: ${ITEM_SIZE}px;
  margin-left: 8px;
  text-align: center;
  color: ${colors.mainTextColor};
  transform: rotate(-90deg);
`;

function SmallProgressBarItem({ filled, label }) {
  const Item = styled.li`
    display: flex;
    margin: ${COMMON_MARGIN}px 0;
    &:last-child {
      margin: 0;
    }
  `;
  return (
    <Item>
      <SmallGrid filled={filled}></SmallGrid>
      <Sign>-</Sign>
      <SmallLabel>{label}</SmallLabel>
    </Item>
  );
}

function renderSegments(totalCount, current, minValue) {
  const items = lodash.range(totalCount);
  return items.map((item, index) => {
    const label = (index + minValue) % 2 ? '·' : index;
    return (
      <SmallProgressBarItem
        key={index}
        filled={index < current} label={label}
      />
    );
  }).reverse();
}

function SmallProgressBar({ min, max, current, title }) {
  const List = styled.ul``;
  return (
    <Layout>
      <Title>{title}</Title>
      <List>{renderSegments(max - min + 1, current, min)}</List>
      <Line length={max - min + 1}></Line>
    </Layout>
  );
}

export default SmallProgressBar;
