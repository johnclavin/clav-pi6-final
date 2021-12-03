import React from 'react';
import fsa7 from './fsa7.png';
import './App.css';

// This was working well, but not connected to the main project.

function App() {
  const [data, setData] = React.useState(null);
  // let data = 42; // for testing
  React.useEffect(() => {
    fetch('/api')
      // .then((res) => res.text()) // for testing data return
      // .then((text) => console.log(text));
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={fsa7}
          className="App"
          alt="No Fish"
          width={400}
          height={400}
        />
        <p>Testing Express Server</p>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
