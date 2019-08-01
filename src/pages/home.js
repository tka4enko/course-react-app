import React, {Component} from 'react';
import {Header, Footer, Overview, Form} from '../modules/index';
import {FilterBar} from "../modules/core/filter-bar";
import classNames from "classnames";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      button: {
        size: 'large',
        title: 'Search',
      },
      filterBar: {
        onClickFilterButton: this.handelClickFilterButton,
      },
      films: {},
      searchBy: '',
      searchValue: '',
      isLoading: true
    };
    this.handelClickFilterButton = this.handelClickFilterButton.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchValue && this.state.searchBy){
      this.fetchRequest(`search=${this.state.searchValue}&searchBy=${this.state.searchBy}`);
      this.setState({isLoading: true});
    };
  };

  handleChange = (e) => {
    this.setState(
      {[e.target.name]: e.target.value}
    );
  };

  handelClickFilterButton(e) {
    this.setState(
      {[e.target.id]: !this.state[e.target.id]}
    );
  }

  fetchRequest = (data) => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies?${data}`)
      .then(results => {
        return results.json();
      }).then(data => {
      this.setState({films: data});
      this.setState({isLoading: false});
    }).catch(() => {
      this.setState({error: true})
    });
  };

  componentDidMount() {
    this.fetchRequest();
  }


  render() {

    return (
      <div className={classNames('wrapper', {['isLoading']: this.state.isLoading})}>
        <Header {...this.state}>
          <Form {...this.state} funcSubmit={this.handleSubmit} funcChange={this.handleChange}/>
        </Header>
        <FilterBar {...this.state} />
        <Overview {...this.state} />
        <Footer/>
      </div>
    );
  }
}

export default Home;