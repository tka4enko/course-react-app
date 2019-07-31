import React, {Component} from "react";
import './header.scss';
import Oasis from '../../assets/oasis.jpg'
import {Logo} from "../core/logo";

class Header extends Component {

  render() {
    return (
      <header className="header"  style={{backgroundImage: `url(${Oasis})`}}>
        <div className="container">
          <div className={`header-wrap ${this.props.page}`}>
            <Logo/>
            {this.props.children}
          </div>
        </div>
      </header>
    );
  }
}

export {Header};