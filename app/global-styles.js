import { injectGlobal } from 'styled-components';

import colors from './color-scheme';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background: ${colors.mainBackgroundColor};
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  body.fontLoaded {
    font-family: 'Source Code Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: ${colors.mainBackgroundColor};
    color: ${colors.mainTextColor};
    min-height: 100%;
    min-width: 100%;
  }

  p {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
