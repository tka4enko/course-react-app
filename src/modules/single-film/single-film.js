import React, {Component} from "react";
import './single-film.scss';

class SingleFilm extends Component {
  getYear = (date) => {
    const item = new Date(date);
    return (
      item.getFullYear()
    )
  };

  render() {
    console.log(this.props);
    return (
      <section className={'section-single-film'}>
        <div className="container">
          {this.props.film ?
            <div className={'section-body'}>
              <div className="section-image">
                <img src={this.props.film.poster_path} alt=""/>
              </div>
              <div className="section-content">
                <div className="section-title">
                  {this.props.film.title}
                </div>
                <div className="section-subtitle">
                  {this.props.film.tagline}
                </div>
                <div className="section-info">
                  <div className="section-date">
                    {this.getYear(this.props.film.release_date)}
                  </div>
                  <div className="section-time">
                    {this.props.film.runtime} min
                  </div>
                </div>
                <div className="section-data">
                  {this.props.film.overview}
                </div>
              </div>
            </div>
            : 'Film does not found'
          }
        </div>
      </section>
    );
  }
}

export {SingleFilm};