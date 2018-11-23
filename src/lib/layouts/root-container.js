import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../base/global';

export default props => {
    return (
        <ThemeProvider theme={props.theme}>
            <GlobalStyle theme={props.theme}>

                {props.children}
            </GlobalStyle>
        </ThemeProvider>
    )
}
