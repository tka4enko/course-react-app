import  React from "react";
import './button.scss';
import classNames from 'classnames';

const Button = (props) => {
  const {title,variant,size,onClick,id,isActive} = {...props};
  return (
    <button onClick={onClick} id={id} className={classNames("button", {[`button-${variant ? variant : 'default'}`]:variant}, {[`${size}`]:size},{isActive} )}>
      {title}
    </button>
  );
};

export {Button};