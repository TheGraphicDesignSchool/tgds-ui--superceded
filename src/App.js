import React, { Component } from 'react';

import {RootContainer} from '../src/lib/layout'
import {DefaultTheme as theme} from '../src/lib/theme'

import {Cog} from '../src/lib/icons'

export default () => {
    return (
        <RootContainer theme={theme}>
            <header className="App-header">
                <Cog color={theme.color} size={120} />
            </header>
        </RootContainer>
    );
}

