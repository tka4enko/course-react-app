import React, {Component} from "react";
import { Route } from "react-router-dom";
import Home from './pages/home';
import Film from './pages/film';


class Routes extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} variant='home'/>
        <Route exact path="/film/:id" component={Film} variant={'film'} />
      </React.Fragment>
    );
  }
}
export default Routes;