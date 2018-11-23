import React, { Component } from 'react';
import './App.css';

import {Cog} from '../src/lib/icons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cog color='white' />
        </header>
      </div>
    );
  }
}

export default App;

