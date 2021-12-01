import React from 'react';
import Canvas from './Canvas';
import { useReducer } from 'react';
import './buttonStyle.css';

function RefreshButton(props) {
  const [counter, update] = useReducer((x) => x + 1, 0);

  return (
    <div>
      <button type="button" onClick={update}>
        New Painting
      </button>
      <div>
        <Canvas refresh={counter} />
        <Canvas refresh={counter} />
        <Canvas refresh={counter} />
        <Canvas refresh={counter} />
        <Canvas refresh={counter} />
        <Canvas refresh={counter} />
      </div>
    </div>
  );
}

export default RefreshButton;
