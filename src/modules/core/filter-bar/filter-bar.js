import React, {Component} from "react";
import './filter-bar.scss';
import {Button} from "../button";

class FilterBar extends Component {

  render() {
    const {onClickFilterButton,sort_by_date,sort_by_rating} = this.props;
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
                <Button isActive={sort_by_date} variant={'link'} title={'Release date'} id="sort_by_date" onClick={onClickFilterButton}/>
                <Button isActive={sort_by_rating} variant='link' title={'Rating'} id="sort_by_rating" onClick={onClickFilterButton}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {FilterBar};