import React from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Graph.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <heading>
          GraphiX
        </heading>
        <p> The free graph learning location.</p>
        <Graph />
      </header>
    </div>
  );
}

export default App;
