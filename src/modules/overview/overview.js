import React, {Component} from "react";
import './overview.scss';
import {FilterBar} from "../core";

class Overview extends Component {

  render() {

    return (
      <div className={'overview'}>
        <>
          <FilterBar {...this.props.filterBar} />
          <div className="films">
          </div>
        </>
        {this.props.films ?
          <>
            <FilterBar onClick={this.props} />
            <div className="container">
              <div className="films">
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