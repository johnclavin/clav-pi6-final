import './App.css';
import React from 'react';
import Canvas from './Canvas';
import Aside from './Aside';

function App() {
  return (
    <div>
      <div>
        <Aside />
      </div>
      <div id='painting'>
        <h3>Algorithmic Painting Number 324</h3>
        <div>
          <Canvas />,
          <Canvas />,
          <Canvas />
        </div>
        <div>
          <Canvas />,
          <Canvas />,
          <Canvas />
        </div>
        <div>
          <Canvas />,
          <Canvas />,
          <Canvas />
        </div>
      </div>
    </div>
  );
}

export default App;
