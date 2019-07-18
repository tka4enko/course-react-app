import React, {Component} from "react";
import './form.scss';
import {Input,Button} from "../core";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: false,
      genre: false,
      search: false,
      search_value:''
    };
   this.handleClick = this.handleClick.bind(this);
   this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e){
    this.setState(
      { [e.target.id]: !this.state[e.target.id] }
    );
  }
  handleChange(e){
    this.setState(
      { 'search_value': e.target.value }
    );
  }

  render() {
    return (
      <div className="form">
        <div className="form-label">
          Find your movie
        </div>
        <div className="form-item">
          <Input onChange={this.handleChange} value={this.state.search_value}/>
        </div>
        <div className="form-bottom">
          <div className="form-bottom-col">
            <div className="label">Search by</div>
            <Button variant={'default'} size={'small'} title={"title"} id="title" isActive={this.state['title']} onClick={this.handleClick}/>
            <Button variant={'default'} size={'small'} title={'genre'} id="genre" isActive={this.state['genre']} onClick={this.handleClick}/>
          </div>
          <div className="form-bottom-col">
            <Button variant={'primary'} size={'large'} id="search" onClick={this.handleClick} title={'Search'}/>
          </div>

        </div>
      </div>
    );
  }
}

export {Form};