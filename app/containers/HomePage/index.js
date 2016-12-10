/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import styled from 'styled-components';
import messages from './messages';

const StyledLink = styled(Link)`
  display: block;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>
        <StyledLink to={`/progressbar`} >ProgressBar</StyledLink>
        <StyledLink to={`/propertycircle`} >PropertyCircle</StyledLink>
        <StyledLink to={`/status`} >Composited Status</StyledLink>
      </h1>
    );
  }
}
