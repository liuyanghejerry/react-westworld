/**
*
* SystemLabel
*
*/

import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';


const Layout = styled.span`
  display: inline-block;
  position: relative;
  padding: 0 .5em;
  border: 2px solid ${colors.mainTextColorWhite};
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.mainTextColorWhite};
  text-transform: uppercase;
  letter-spacing: 0.4em;
  &::after {
    display: inline-block;
    position: absolute;
    content: '';
    width: 20px;
    height: 100%;
    right: 0;
    top: 0;
    border-right: 5px solid ${colors.mainTextColorWhite};
    border-radius: 20px;
  }
`;

function SystemLabel() {
  return (
    <Layout>delos</Layout>
  );
}

export default SystemLabel;
