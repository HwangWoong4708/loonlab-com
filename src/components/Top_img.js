import React from "react";
import blondgirl from "../img/blond-girl-white-iphone1108.jpg";
import "./Top_img.css";

function Topimg() {
  return (
    <div className="Top_img">
      <img src={blondgirl} alt="blond girl"></img>
      <div className="intro">
        <span className="intro__title">
          Think differently about your period.
        </span>
        <div className="intro__paragraph">
          <span>
            LOONLAB is a tech and health company focused on health products for
            women.
            <br />
            <br />
            Our staff include PhD researchers, programmers, product and graphic
            designers, marketers and a special entrepreneur.
            <br />
            We aim on improving women's comfort during their period as well as
            their overall health.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Topimg;
