import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';
import SmallLineChart from './SmallLineChart';
import Label from './Label';

function LiveStatus({title, data, maxX, maxY}) {
  const Layout = styled.span`
    display: inline-block;
  `;
  const ColoredLabel = styled(Label)`
    color: ${colors.mainTextColorWhite};
  `;
  return (
    <span>
      <ColoredLabel>{title}:</ColoredLabel>
      <SmallLineChart
        data={data}
        maxX={maxX}
        maxY={maxY} />
    </span>
  );
}

export default LiveStatus;
