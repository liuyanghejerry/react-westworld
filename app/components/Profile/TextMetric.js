import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';
import Label from './Label';

function TextMetric({ title, content }) {
  const StyledSpan = styled.span`
    margin-right: 10px;
  `;
  const Text = styled.span`
    color: ${colors.textNumberGreen};
  `;
  return (
    <StyledSpan>
      <Label>{title}:</Label>
      <Text>{content}</Text>
    </StyledSpan>
  );
}

export default TextMetric;
