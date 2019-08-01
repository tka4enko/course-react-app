import React, {Component} from "react";
import './form.scss';
import {Input,Button,RadioButton} from "../core";

class Form extends Component {

  render() {
    return (
      <div className="form">
        <div className="form-label">
          Find your movie
        </div>
        <form action="/" onSubmit={this.props.funcSubmit}>
          <div className="form-item">
            <Input onChange={this.props.funcChange} id={'searchValue'} name='searchValue' value={this.props.search_value}/>
          </div>
          <div className="form-bottom">
            <div className="form-bottom-col">
              <div className="label">Search by</div>
              <RadioButton onChange={this.props.funcChange} id='title' title={'Title'} name='searchBy' value='title' isChecked={this.props.searchBy === 'title'}/>
              <RadioButton onChange={this.props.funcChange} id='genres' title={'Genres'} name='searchBy' value='genres' isChecked={this.props.searchBy === 'genres'}/>
            </div>
            <div className="form-bottom-col">
              <Button variant={'primary'} size={'large'} id="search" title={'Search'}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export {Form};