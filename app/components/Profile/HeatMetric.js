import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';
import GradientProgressBar from './GradientProgressBar'

function HeatMetric({title, value}) {
  const StyledSpan = styled.span`
    margin-right: 10px;
  `;
  const Label = styled.label`
    white-space: nowrap;
    padding-right: 5px;
  `;
  return <StyledSpan><Label>{title + ':'}</Label><GradientProgressBar value={value}/></StyledSpan>;
}

export default HeatMetric;
