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
    display: inline-block;
    margin-right: 4px;
    padding: 0 4px;
    border: 2px solid ${colors.mainTextColor};
    border-radius: 4px;
    // background: linear-gradient(
    //   to top left,
    //   transparent 20%,
    //   ${colors.mainTextColor} 20%,
    //   ${colors.mainTextColor} calc(20% + 1px),
    //   ${colors.mainTextColor} calc(20% + 2px),
    //   ${colors.mainTextColor} calc(20% + 3px),
    //   transparent calc(20% + 3px),
    //   transparent 100%
    // );
  `;
  return (
    <Layout>{content}</Layout>
  );
}

export default Tag;
