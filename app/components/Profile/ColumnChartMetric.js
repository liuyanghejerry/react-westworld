import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';
import SmallColumnChart from './SmallColumnChart'

function ColumnChartMetric({title, data}) {
  const StyledSpan = styled.span`
    margin-right: 10px;
  `;
  const Label = styled.label`
    white-space: nowrap;
    padding-right: 5px;
  `;
  return <StyledSpan><Label>{title + ':'}</Label><SmallColumnChart data={data}/></StyledSpan>;
}

export default ColumnChartMetric;
