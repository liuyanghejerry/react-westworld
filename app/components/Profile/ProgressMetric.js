import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import Label from './Label';

function ProgressMetric({ title, value }) {
  const StyledSpan = styled.span`
    margin-right: 10px;
  `;
  return (
    <StyledSpan>
      <Label>{title}:</Label>
      <ProgressBar value={value} />
    </StyledSpan>
  );
}

export default ProgressMetric;
