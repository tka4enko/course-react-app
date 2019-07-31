import React, {Component} from 'react';
import {Header, Footer, Overview, Form} from '../modules/index';
import {FilterBar} from "../modules/core/filter-bar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page:"home",
      button: {
        size: 'large',
        title: 'Search',
      },
      filterBar: {
        onClickFilterButton: this.handelClickFilterButton,
      },
      films: {},
      searchBy: '',
      search_value: ''
    };
    this.handelClickFilterButton = this.handelClickFilterButton.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchRequest(`search=${this.state.search_value}&searchBy=${this.state.searchBy}`)
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
    console.log(data);
    fetch(`https://reactjs-cdp.herokuapp.com/movies?${data}`)
      .then(results => {
        return results.json();
      }).then(data => {
      this.setState({films: data})
    }).catch(() => {
      this.setState({error: true})
    });
  };

  componentDidMount() {
    this.fetchRequest();
    document.body.classList.add('home');
  }


  render() {

    return (
      <>
        <Header {...this.state}>
            <Form {...this.props} funcSubmit={this.handleSubmit}  funcChange={this.handleChange}/>
        </Header>
        <FilterBar {...this.state} />
        <Overview {...this.state} />
        <Footer/>
      </>
    );
  }
}

export default Home;