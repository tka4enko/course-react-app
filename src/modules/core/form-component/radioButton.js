import React from "react";
import classNames from 'classnames';

const RadioButton = (props) => {
  const {title, onChange, id, name, value, isChecked} = props;
  return (
    <div  className={classNames("radio-toolbar", {['active']:isChecked})}>
      <label htmlFor={id}>{title}</label>
      <input type="radio" name={name} id={id} onChange={onChange} value={value} className={'radio'}/>
    </div>
  );
};

export {RadioButton};