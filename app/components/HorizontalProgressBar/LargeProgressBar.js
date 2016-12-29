/**
*
* HorizontalProgressBar
*
*/

import React from 'react';
import lodash from 'lodash';
import styled from 'styled-components';
import colors from '../../color-scheme';

const ITEM_SIZE = 18;
const COMMON_MARGIN = 10;

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

const LINE_MARGIN = 18;
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

const LargeGrid = styled.div`
  width: ${ITEM_SIZE}px;
  height: ${ITEM_SIZE}px;
  border: 1px solid ${colors.mainTextColor};
  background: ${(props) => (props.filled ? colors.mainTextColor : 'transparent')};
`;

const Sign = styled.div`
  width: 1em;
  line-height: ${ITEM_SIZE}px;
  text-align: center;
`;

const LargeLabel = styled.div`
  width: 2ch;
  line-height: ${ITEM_SIZE}px;
  margin-left: ${COMMON_MARGIN}px;
  text-align: center;
  color: ${colors.mainTextColor};
`;

function LargeProgressBarItem({ filled, label }) {
  const Item = styled.li`
    display: flex;
    margin: ${COMMON_MARGIN}px 0;
    &:last-child {
      margin: 0;
    }
  `;
  return (
    <Item>
      <LargeGrid filled={filled}></LargeGrid>
      <Sign>-</Sign>
      <LargeLabel>{label}</LargeLabel>
    </Item>
  );
}

function renderSegments(totalCount, current, minValue) {
  const items = lodash.range(totalCount);
  return items.map((item, index) =>
     (
       <LargeProgressBarItem
         key={index}
         filled={index < current}
         label={index + minValue}
       />
    )
  ).reverse();
}

function LargeProgressBar({ min, max, current, title }) {
  return (
    <Layout>
      <Title>{title}</Title>
      <ul>{renderSegments(max - min + 1, current, min)}</ul>
      <Line length={max - min + 1}></Line>
    </Layout>
  );
}

export default LargeProgressBar;
