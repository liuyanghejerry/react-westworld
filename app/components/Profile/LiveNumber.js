import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const Unit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 20px;
  text-align: right;
  color: ${({ color }) => color};
  &:first-of-type {
    margin-left: 0;
  }
`;

const Value = styled.span`
  font-size: 30px;
  line-height: 1;
`;

function CompoundLabel({ title, min, max }) {
  const Layout = styled.span`
    display: inline-flex;
    flex-direction: column;
  `;
  const LargeLabel = styled(Label)`
    font-size: 18px;
  `;
  const SmallLabel = styled(Label)`
    font-size: 12px;
  `;
  return (
    <Layout>
      <LargeLabel>{title}:</LargeLabel>
      <SmallLabel>{min}-{max}</SmallLabel>
    </Layout>
  );
}

function LiveNumber({ title, value, min, max, color }) {
  return (
    <Unit color={color}>
      <CompoundLabel title={title} min={min} max={max} />
      <Value>{value}</Value>
    </Unit>
  );
}

export default LiveNumber;
