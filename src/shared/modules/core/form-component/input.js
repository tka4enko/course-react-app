import * as React from "react";
import './form-componet.scss';

class Input extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className={'input'} type={'text'} placeholder={'Searc...'}/>
    );
  }
}

export {Input};