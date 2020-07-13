import React from "react";
import Navigation from "../components/Navigation";
import Contactbox from "../components/Contact_box";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact Us">
        <Navigation />
        <Contactbox />
      </div>
    );
  }
}

export default Contact;
