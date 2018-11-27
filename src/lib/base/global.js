import { css } from 'styled-components';
import remcalc from '../utils/remcalc';

// @import url('${theme.font.href()}');
// @import url('${theme.monoFont.href()}');

export default ({ theme }) => css`

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
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    font-size: 15px;
    margin: 0;
    padding: 0;
    background: ${theme.background};
    color: ${theme.text};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
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
  
  //* { outline: 1px solid rgba(0, 0, 0, 0.1); }
`;
