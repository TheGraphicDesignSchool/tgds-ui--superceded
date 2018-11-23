import React, { Component } from 'react';

import {RootContainer} from '../src/lib/layout'

import {Cog} from '../src/lib/icons'

class App extends Component {
  render() {
    return (
      <RootContainer theme={{ color: 'blue'}}>
        <header className="App-header">
          <Cog color='blue' />
        </header>
      </RootContainer>
    );
  }
}

export default App;

