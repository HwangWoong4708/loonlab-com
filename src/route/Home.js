import React from "react";
import Navigation from "../components/Navigation";
import Topimg from "../components/Top_img";
import Awards from "../components/Awards";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <Topimg></Topimg>
        <Awards></Awards>
      </div>
    );
  }
}

export default Home;
