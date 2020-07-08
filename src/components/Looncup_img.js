import React from "react";
import Looncup from "../img/Looncup.jpg";
import "./Looncup_img.css";

function Looncup_img() {
  return (
    <div className="Looncup_intro">
      <img src={Looncup} alt="Looncup"></img>
      <div id="grid">
        <div className="Looncup_name">LOON CUP</div>
        <div className="Looncup_paragraph">
          A healthy period is vital for women, and can provide medical
          information. LOON CUP gives valuable insight into women's health by
          quantitively measuring menstruation data. Volume, colour, cycle and
          core temperature are automatically measured and tracked, enabling
          women to gain a better insight into their health.
        </div>
      </div>
    </div>
  );
}

export default Looncup_img;
