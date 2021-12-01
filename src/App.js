import React from 'react';
import Canvas from './Canvas';
import { useReducer } from 'react';
import './App.css';
import './buttonStyle.css';

function App() {
  const [counter, update] = useReducer((x) => x + 1, 0);
  return (
    <div>
      <div id="painting">
        <h3>Algorithmic Painting Number 324</h3>
        <button type="button" onClick={update}>
          New Painting
        </button>
        <div>
          <Canvas refresh={counter} />
          <Canvas refresh={counter} />
          <Canvas refresh={counter} />
        </div>
        <div>
          <Canvas refresh={counter} />
          <Canvas refresh={counter} />
          <Canvas refresh={counter} />
        </div>
        <div>
          <Canvas refresh={counter} />
          <Canvas refresh={counter} />
          <Canvas refresh={counter} />
        </div>
      </div>
    </div>
  );
}

export default App;
