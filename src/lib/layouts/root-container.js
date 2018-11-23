import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// import global from '../base';

// const GlobalStyle = createGlobalStyle`
//   ${global({ theme })};
// `

export default props => {

    // useEffect( () => {
    //     const { theme = {} } = props;
    // }, [])

    return (
        <ThemeProvider theme={props.theme}>
            {props.children}
        </ThemeProvider>
    )
}
