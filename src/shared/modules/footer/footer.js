import * as React from "react";
import './footer.scss';
import {Logo} from "../core/logo";

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Logo/>
        </div>
      </footer>
    );
  }
}

export {Footer};