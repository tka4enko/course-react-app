import React, {Component} from "react";
import './overview.scss';
import {FilterBar} from "../core";
import {Link} from 'react-router-dom';

class Overview extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  getYear = (date) => {
    const item = new Date(date);
    return (
      item.getFullYear()
    )
  };

  render() {
    return (
      <div className={'overview'}>
        <>
          <FilterBar {...this.props} />
        </>
        {this.props.films.data ?
          <>
            <div className="container">
              <div className="films">
                {this.props.films.data.map((item) => (
                  <Link to={`/${item.id}`} className="card-film" key={item.id}>
                    <div className="card-image"><img src={item.poster_path} alt=""/></div>
                    <div className="card-head">
                      <div className="card-title">{item.title}</div>
                      <div className="card-release">{this.getYear(item.release_date)}</div>
                    </div>
                    <div className="card-geres">
                      {item.genres.map((item, key) => (
                        <span key={key}>{item}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
          :
          <div className="no-results">
            Films not found
          </div>
        }
      </div>
    );
  }
}

export {Overview};