import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';

function Tag({ content }) {
  const Layout = styled.span`
    margin-right: 4px;
    margin-bottom: 4px;
    padding: 3px;
    border: 2px solid ${colors.mainTextColorWhite};
    border-radius: 4px;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
  `;
  return (
    <Layout>{content}</Layout>
  );
}

export default Tag;
