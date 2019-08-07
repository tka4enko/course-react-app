import React, {Component} from "react";
import './single-film.scss';
import PropTypes from "prop-types";

class SingleFilm extends Component {
  getYear = (date) => {
    const item = new Date(date);
    return (
      item.getFullYear()
    )
  };
  render() {
    const {film} = this.props;
    const {poster_path, title, tagline, release_date, runtime, overview} = this.props.film;
    return (
      <section className={'section-single-film'}>
        <div className="container">
          {film ?
            <div className={'section-body'}>
              <div className="section-image">
                <img src={poster_path} alt=""/>
              </div>
              <div className="section-content">
                <div className="section-title">
                  {title}
                </div>
                <div className="section-subtitle">
                  {tagline}
                </div>
                <div className="section-info">
                  <div className="section-date">
                    {this.getYear(release_date)}
                  </div>
                  <div className="section-time">
                    {runtime} min
                  </div>
                </div>
                <div className="section-data">
                  {overview}
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
SingleFilm.propTypes = {
  film: PropTypes.object,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.string,
  release_date: PropTypes.string,
  runtime: PropTypes.string,
  overview: PropTypes.string,
};

export {SingleFilm};

