import React, {Component} from "react";
import './form-componet.scss';

const Input = (props) => {
  const {onChange,value} = {...props};

  return (
    <input onChange={onChange} className={'input'} type={'text'} placeholder={'Searc...'} value={value}/>
  );
};

export {Input};