import * as React from "react";
import { Route } from "react-router-dom";
import Home from './pages/home';

class Routes extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
      </React.Fragment>
    );
  }
}
export default Routes;