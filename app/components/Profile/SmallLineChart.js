import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';

const CHART_WIDTH = 120;
const CHART_HEIGHT = 12;
const LINE_WIDTH = 10;

function SmallLineChart({data, maxX, maxY}) {
  return (
    <span>
      <svg
        width={CHART_WIDTH}
        height={CHART_HEIGHT}
        preserveAspectRatio="xMinYMid meet"
        viewBox={`0 0 ${maxX} ${maxY}`}>
        <polyline
          fill="none"
          stroke={colors.mainTextColor}
          strokeWidth={LINE_WIDTH}
          points={data} />
      </svg>
    </span>
  );
}

export default SmallLineChart;
