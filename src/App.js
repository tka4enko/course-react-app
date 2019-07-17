import React from 'react';
import './shared/styles/base.scss';
import {BrowserRouter as Router} from "react-router-dom";
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
