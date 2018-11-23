import { createGlobalStyle } from 'styled-components';
import remcalc from '../utils/remcalc';

// @import url('${theme.font.href()}');
// @import url('${theme.monoFont.href()}');

export default ({ theme }) => createGlobalStyle`

  [hidden] {
    display: none;
  }

  html, body {
    font-display: optional;
    font-family: ${theme.font.families};
    font-weight: ${theme.font.weight.normal};
  }

  html {
    line-height: 1.15;
    text-size-adjust: 100%;
  }

  body {
    font-size: 15px;
    margin: 0;
    padding: 0;
    background: ${theme.background};
    color: ${theme.text};
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #root {
    min-height: calc(100vh - ${remcalc(48)});
  }

  #header {
    z-index: 9999;
  }

  body > #root {
    display: flex;
    flex-flow: column;
  }

  form {
    margin: 0;
  }

`;
