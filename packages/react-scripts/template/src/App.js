// Components
import React, { Component } from 'react';

// CSS
import './css/App.css';

// Component Imports
import NavMenu from './components/NavMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <h1>React</h1>
      </div>
    );
  }
}

export default App;
