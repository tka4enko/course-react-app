import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Routes from './shared/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes/>
        </div>
      </Router>
    </div>
  );
}

export default App;
