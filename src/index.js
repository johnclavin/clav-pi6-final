import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Register from './Register';
import Navigation from './Navigation';

const RtrIndex = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/App" element={<App />} />
        <Route exact path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<RtrIndex />, document.getElementById('root'));
