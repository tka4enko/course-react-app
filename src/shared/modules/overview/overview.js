import * as React from "react";
import './overview.scss';
import {Button} from "../core";

class Overview extends React.Component {

  render() {

    return (
      <div className={'overview'}>
        <div className="container">
          {this.props.films ?
            <>
              <div className="filter-bar">
                <Button {...this.props.button} />
              </div>
              <div className="films">


              </div>
            </>
            :
            <div className="no-results">
              Films not found
            </div>
          }
        </div>
      </div>
    );
  }
}

export {Overview};