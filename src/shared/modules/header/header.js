import * as React from "react";
import './header.scss';
import Oasis from '../../../assets/oasis.jpg'
import {Form} from "../form";

class Header extends React.Component {

  render() {
    console.log(Oasis);
    return (
      <header className="header" style={{backgroundImage: `url(${Oasis})`}}>
        <div className="container">
          <div className="logo">
            netflix
          </div>
          <Form/>
        </div>
      </header>
    );
  }
}

export {Header};