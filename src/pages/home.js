import React, {Component} from 'react';
import {Header, Footer, Overview} from '../modules/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handelClickFilterButton = this.handelClickFilterButton.bind(this);
    this.state = {
      sort_by_rating: false,
      sort_by_date: false
    }
  }

  handelClickFilterButton(e) {
    this.setState(
      { [e.target.id]: !this.state[e.target.id] }
    );
  }

  render() {
    const overviewData =
      {
        button: {
          size: 'large',
          title: 'Search',
        },
        filterBar: {
          onClickFilterButton: this.handelClickFilterButton,
          sort_by_rating:this.state.sort_by_rating,
          sort_by_date:this.state.sort_by_date,
        }

      };
    return (
      <>
        <Header/>
        <Overview {...overviewData}
        />
        <Footer/>
      </>
    );
  }
}

export default Home;