import * as React from "react";
import {Header, Footer, Overview} from '../modules';


class Home extends React.Component {


  render() {
    const overviewData =
      {
        button: {
          size: 'large',
          title: "Search",
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