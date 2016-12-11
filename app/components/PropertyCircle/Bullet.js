import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';

const Bullet = styled.div`
  width: ${({radius}) => radius}px;
  height: ${({radius}) => radius}px;
  border-radius: 100%;
  background: ${colors.mainTextColor};
`;

export default Bullet;
