import * as React from "react";
import './header.scss';
import Oasis from '../../../assets/oasis.jpg'
import {Form} from "../form";
import {Logo} from "../core/logo";

class Header extends React.Component {

  render() {
    console.log(Oasis);
    return (
      <header className="header" style={{backgroundImage: `url(${Oasis})`}}>
        <div className="container">
          <Logo/>
          <Form/>
        </div>
      </header>
    );
  }
}

export {Header};