import React from 'react';
import styled from 'styled-components';
import SmallColumnChart from './SmallColumnChart';
import Label from './Label';

function ColumnChartMetric({ title, data }) {
  const StyledSpan = styled.span`
    margin-right: 10px;
  `;
  return (
    <StyledSpan>
      <Label>{`${title}:`}</Label>
      <SmallColumnChart data={data} />
    </StyledSpan>
  );
}

export default ColumnChartMetric;
