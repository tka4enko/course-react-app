import * as React from "react";
import './form.scss';
import {Input, Button} from "../core";

class Form extends React.Component {

  render() {
    return (
      <div className="form">
        <div className="form-label">
          Find your movie
        </div>
        <div className="form-item">
          <Input/>
        </div>
        <div className="form-bottom">
          <div className="form-bottom-col">
            <div className="label">Search by</div>
            <Button variant={'primary'} size={'small'} title={"title"}/>
            <Button variant={'default'} size={'small'} title={'genre'}/>
          </div>
          <div className="form-bottom-col">
            <Button variant={'primary'} size={'large'} title={'Search'}/>
          </div>

        </div>
      </div>
    );
  }
}

export {Form};