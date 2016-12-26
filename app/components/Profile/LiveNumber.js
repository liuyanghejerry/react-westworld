import React from 'react';
import styled from 'styled-components';

const Unit = styled.div`
  margin: 0 20px;
  color: ${({color}) => color};
  &:first-of-type {
    margin-left: 0;
  }
`;
const Label = styled.label`
  vertical-align: top;
`;
const Value = styled.span`
  font-size: 30px;
  line-height: 1;
`;

function LiveNumber({title, value, color}) {
  return (
    <Unit color={color}>
      <Label>{title}:</Label>
      <Value>{value}</Value>
    </Unit>
  );
}

export default LiveNumber;
