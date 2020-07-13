import React from "react";
import Leonacup from "../img/Leonacup.jpg";
import "./Leonacup_img.css";

function Leonacup_img() {
  return (
    <div className="Leonacup_intro">
      <img src={Leonacup} alt="Leonacup"></img>
      <div id="grid">
        <div className="Leonacup_name">LEONA CUP</div>
        <div className="Leonacup_paragraph">
          LEONA focuses on improving women's comfort during menstruation. LEONA
          CUP not only provides period protection but also an ingenious solution
          for reducing discomfort. We hope this innovation will encourage women
          to demand better menstrual care and have a better period.
        </div>
      </div>
    </div>
  );
}

export default Leonacup_img;
