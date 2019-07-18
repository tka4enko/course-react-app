import React, {Component} from "react";
import { Route } from "react-router-dom";
import Home from './pages/home';


class Routes extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />

      </React.Fragment>
    );
  }
}
export default Routes;