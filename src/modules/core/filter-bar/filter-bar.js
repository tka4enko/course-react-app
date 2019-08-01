import React, {Component} from "react";
import './filter-bar.scss';
import {Button} from "../button";

class FilterBar extends Component {

  render() {
    const {onClickFilterButton,sortBbyDate,sortByRating} = this.props;
    return (
      <div className="filter-bar">
        <div className="container">
          <div className="filter-bar-block">
            <div className="filter-bar-col">
              {this.props.films.data ? this.props.films.data.length : 0  } movies found
            </div>
            <div className="filter-bar-col">
              <div className="filter-bar-label">
                Sort by:
              </div>
              <div className="filter-bar-actions">
                <Button isActive={sortBbyDate} variant={'link'} title={'Release date'} id="sortBbyDate" onClick={onClickFilterButton}/>
                <Button isActive={sortByRating} variant='link' title={'Rating'} id="sortByRating" onClick={onClickFilterButton}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {FilterBar};