import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import global from '../base/global';
const GlobalStyle = createGlobalStyle`${global}`

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
