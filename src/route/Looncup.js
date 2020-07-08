import React from "react";
import Navigation from "../components/Navigation";
import BrandLooncup from "../components/Looncup_img";

class Looncup extends React.Component {
  render() {
    return (
      <div className="Brand_Looncup">
        <Navigation />
        <BrandLooncup />
      </div>
    );
  }
}

export default Looncup;
