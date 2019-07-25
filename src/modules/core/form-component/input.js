import React, {Component} from "react";
import './form-componet.scss';

const Input = (props) => {
  const {onChange,value,name} = props;

  return (
    <input onChange={onChange} name={name} className={'input'} type={'text'} placeholder={'Searc...'} value={value}/>
  );
};

export {Input};