import React, {Component} from "react";
import './overview.scss';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

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
    const {films} = this.props;
    return (

      <div className={'overview'}>
        <>
          <div className="container">
            {this.props.error ? <h1 className={'error'}>Fetch doesn't work</h1> :
              films.total ?
                <div className="films">
                  {films.data.map((item) => (
                    <Link to={`/film/${item.id}`} className="card-film" key={item.id}>
                      <div className="card-image"><img src={item.poster_path} alt=""/></div>
                      <div className="card-head">
                        <div className="card-title">{item.title}</div>
                        <div className="card-release">{this.getYear(item.release_date)}</div>
                      </div>
                      <div className="card-genres">
                        {item.genres.map((item, key) => (
                          <span key={key}>{item}</span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
                :
                <div className="no-results">
                  Films not found
                </div>
            }
          </div>
        </>
      </div>
    );
  }
}

export {Overview};

Overview.propTypes = {
  backgroundImage: PropTypes.string,
  error: PropTypes.bool,
  films: PropTypes.object
};