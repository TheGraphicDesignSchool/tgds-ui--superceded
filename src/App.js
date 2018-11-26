import React from 'react';

import {RootContainer, CBox} from '../src/lib/layout'
import {DefaultTheme as theme} from '../src/lib/theme'

import {Cog} from '../src/lib/icons'

import SpSample from './samples/split'

export default () => {
    return (
        <RootContainer theme={theme}>
            <header className="App-header">
                <Cog color={theme.color} size={60} />
            </header>
            <CBox>
                <SpSample/>
            </CBox>
        </RootContainer>
    );
}

