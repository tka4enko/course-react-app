import * as React from "react";
import './overview.scss';
import {Button} from "../core";

class Overview extends React.Component {

  render() {

    return (
      <Button {...this.props.button} />
    );
  }
}

export {Overview};