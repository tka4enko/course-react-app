import React, {Component} from "react";
import './form.scss';
import {Input,Button,RadioButton} from "../core";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      search_value:''
    };
   this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange(e){
    this.setState(
      { [e.target.name]: e.target.value }
    );
    console.log(this.state);
  }

  render() {
    return (
      <div className="form">
        <div className="form-label">
          Find your movie
        </div>
        <form action="/" onSubmit={this.handleSubmit}>
          <div className="form-item">
            <Input onChange={this.handleChange} id={'search_value'} name='search_value' value={this.state.search_value}/>
          </div>
          <div className="form-bottom">
            <div className="form-bottom-col">
              <div className="label">Search by</div>
              <RadioButton onChange={this.handleChange} id='title' title={'Title'} name='filter' value='title' isChecked={this.state.filter === 'title'}/>
              <RadioButton onChange={this.handleChange} id='genree' title={'Genre'} name='filter' value='genree' isChecked={this.state.filter === 'genree'}/>
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