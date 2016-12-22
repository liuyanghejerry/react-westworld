/**
*
* Profile
*
*/

import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';

function Tag({content}) {
  const Layout = styled.span`
    margin-right: 4px;
    margin-bottom: 4px;
    padding: 0 4px;
    border: 2px solid ${colors.mainTextColor};
    border-radius: 4px;
    text-transform: uppercase;
  `;
  return (
    <Layout>{content}</Layout>
  );
}

export default Tag;
