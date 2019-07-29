import React, {Component} from "react";
import './header.scss';
import Oasis from '../../assets/oasis.jpg'
import {Form} from "../form";
import {Logo} from "../core/logo";

class Header extends Component {

  render() {
    console.log();
    return (
      <header className="header"  style={{backgroundImage: `url(${Oasis})`}}>
        <div className="container">
          <Logo/>
          <Form {...this.props} />
        </div>
      </header>
    );
  }
}

export {Header};