import React from 'react';

import {RootContainer, AppContainer, CBox} from '../src/lib/layout'
import {DefaultTheme as theme} from '../src/lib/theme'

import {Cog} from '../src/lib/icons'

import SpSample from './samples/split'
import Page from './samples/home'

export default () => {
    return (
        <RootContainer theme={theme}>
            <AppContainer
                renderSidebar={() => (
                    <div>sidebar</div>
                )}
            >
                <Page />
            </AppContainer>
        </RootContainer>
    );
}

