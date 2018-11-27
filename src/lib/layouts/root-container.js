import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import global from '../base/global';
import reboot from '../base/reboot';

const GlobalStyle = createGlobalStyle`
  ${global};
  ${reboot}
`

export default props => {
    return (
        <ThemeProvider theme={props.theme}>
            <>
                <GlobalStyle theme={props.theme}/>
                {props.children}
            </>
        </ThemeProvider>
    )
}
