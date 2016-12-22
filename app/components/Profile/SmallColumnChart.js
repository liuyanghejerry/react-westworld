import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';

function SmallColumnChart({data}) {
  const Layout = styled.span`
    display: inline-flex;
    flex-direction: row;
    align-items: flex-end;
  `;
  const Column = styled.div`
    width: 4px;
    margin: 0 1px;
    height: ${({y}) => y / 10}px;
    background: ${colors.mainTextColor};
  `;
  return (
    <Layout>
      {data.map((y, x) => {
        return <Column key={x} y={y}/>;
      })}
    </Layout>
  );
}

export default SmallColumnChart;
