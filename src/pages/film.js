import React, {Component} from 'react';
import {SingleFilm, Header, Footer, Overview} from "../modules";

import {Button} from "../modules/core/button";
import classNames from "classnames";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "film",
      film: {},
      films: {},
      isLoading:true
    };
  }

  fetchRequestFilm = async (data) => {
    await fetch(`https://reactjs-cdp.herokuapp.com/movies/${data}`)
      .then(results => {
        return results.json();
      }).then(data => {
      this.setState({film: data})
    }).catch(() => {
      this.setState({error: true})
    });
  };
  fetchRequestFilmByGenre =  (data) => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/?searchBy=genres&filter=${data}`)
      .then(results => {
        return results.json();
      }).then(films => {
      this.setState({films})
    }).catch(() => {
      this.setState({error: true})
    });
  };

  generateParamsForFetch = () => {
    let fetchParams = '';
      this.state.film.genres.map((item) => {
        fetchParams += item+',';
      });
    return fetchParams.slice(0, -1);
  };

  async componentDidMount() {
    await this.fetchRequestFilm(this.props.match.params.id);
    await this.generateParamsForFetch();
    await this.fetchRequestFilmByGenre(`${this.generateParamsForFetch()}`);
    this.setState({isLoading: false});
  }

  render() {

    return (
      <div className={classNames('wrapper',{['isLoading']: this.state.isLoading})}>
        <Header {...this.state}>
          <Button variant="search" href='/' title='search'/>
        </Header>
        <SingleFilm {...this.state}/>
        <div className="filter-bar">
          <div className="container">
            <div className="filter-bar-block">
              <div className="filter-bar-col">
                Films by
                {this.state.film.genres ? this.state.film.genres.map((item, index) => (
                  <span>
                    {item}
                  </span>
                )) : ''}
                <span>
                genres
                </span>
              </div>
            </div>
          </div>
        </div>
        {this.state.films.total ? <Overview {...this.state} /> : ''}
        <Footer/>
      </div>
    );
  }
}

export default Film;