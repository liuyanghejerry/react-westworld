/**
*
* Profile
*
*/

import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';

function calcColor(value) {
  // We want color stop at blue, which hue is 240.
  return `hsla(${(value / 9 * 240).toFixed(2)}, 100%, 50%, 0.5)`;
}

function GradientProgressBar({ value }) {
  const Layout = styled.span`
    display: inline-flex;
    flex-direction: row;
  `;
  const GRID_SIZE = 8;
  const Grid = styled.span`
    width: ${GRID_SIZE}px;
    height: ${GRID_SIZE}px;
    margin: 0 1px;
    background: ${({ bgValue }) => calcColor(bgValue)};
  `;
  const EmptyGrid = styled.span`
    width: ${GRID_SIZE}px;
    height: ${GRID_SIZE}px;
    margin: 0 1px;
    border: 1px solid ${colors.mainTextColorLight};
    background: transparent;
  `;
  return (
    <Layout>
      {new Array(10).fill(null).map((_, index) => {
        if (index >= value) {
          return <EmptyGrid key={index} />;
        }
        return <Grid key={index} bgValue={index} />;
      })}
    </Layout>
  );
}

export default GradientProgressBar;
