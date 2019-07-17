import * as React from "react";
import './button.scss';
import classNames from 'classnames';

const Button = (props) => {
  const {title,variant,size} = {...props};
  return (
    <button className={classNames("button", {[`button-${variant ? variant : 'default'}`]:variant}, {[`${size}`]:size} )}>
      {title}
    </button>
  );
};

export {Button};