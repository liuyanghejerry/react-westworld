import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';

function TextMetric({title, content}) {
  const StyledSpan = styled.span`
    margin-right: 10px;
  `;
  const Label = styled.label`
    white-space: nowrap;
    padding-right: 5px;
  `;
  const Text = styled.span`
    color: ${colors.textNumberGreen};
  `;
  return <StyledSpan><Label>{title + ':'}</Label><Text>{content}</Text></StyledSpan>;
}

export default TextMetric;
