import React from 'react';
import styled from 'styled-components';
import GradientProgressBar from './GradientProgressBar'
import Label from './Label';

function HeatMetric({title, value}) {
  const StyledSpan = styled.span`
    margin-right: 10px;
  `;
  return (
    <StyledSpan>
      <Label>{title + ':'}</Label>
      <GradientProgressBar value={value} />
    </StyledSpan>
  );
}

export default HeatMetric;
