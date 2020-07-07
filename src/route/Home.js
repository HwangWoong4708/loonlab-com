import React from "react";
import Navigation from "../components/Navigation";
import Topimg from "../components/Top_img";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <Topimg />
      </div>
    );
  }
}

export default Home;
