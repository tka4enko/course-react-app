import React from "react";
import './button.scss';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const Button = (props) => {
  const {title, variant, size, onClick, id, isActive, href} = props;
  return (
    <>
      {href ?
        <Link to={href} onClick={onClick} id={id}
              className={classNames("button", {[`button-${variant ? variant : 'default'}`]: variant}, {[`${size}`]: size}, {isActive})}>
          {title}
        </Link>
        :
        <button onClick={onClick} id={id}
                className={classNames("button", {[`button-${variant ? variant : 'default'}`]: variant}, {[`${size}`]: size}, {isActive})}>
          {title}
        </button>
      }
    </>
  )

};

export {Button};