import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';
import ProgressBar from './ProgressBar'

function ProgressMetric({title, value}) {
  const StyledSpan = styled.span`
    margin-right: 10px;
  `;
  const Label = styled.label`
    white-space: nowrap;
    padding-right: 5px;
  `;
  return <StyledSpan><Label>{title + ':'}</Label><ProgressBar value={value}/></StyledSpan>;
}

export default ProgressMetric;
