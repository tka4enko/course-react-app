import React from 'react';
import './styles/base.scss';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './routes';
import {ErrorBoundary} from './error'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Routes/>
        </Router>
      </ErrorBoundary>
    </div>

  );
}

export default App;
