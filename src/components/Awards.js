import React from "react";
import "./Awards.css";
import CES from "../img/CES2019.png";
import Ergonomic from "../img/Ergonomic2018.png";
import Innovation from "../img/Inovation2016.png";

function Awards() {
  return (
    <div className="Awards_list">
      <div className="title_Awards">Awards</div>
      <div className="Awards_paragraph">
        Our innovative products have won several prestigious awards.
      </div>
      <div className="title__list">
        <div className="title__img">
          <figure>
            <img src={CES} alt="CES" />
            <figcaption className="title__Name">
              CES Inovation Award 2019
            </figcaption>
            <figcaption className="title__Detail">Honoree</figcaption>
          </figure>
          <figure>
            <img src={Ergonomic} alt="Ergonomic" />
            <figcaption className="title__Name">
              Ergonomic Design Award 2018
            </figcaption>
            <figcaption className="title__Detail">
              Best Innovation Award
            </figcaption>
          </figure>
          <figure>
            <img src={Innovation} alt="Innovation" />
            <figcaption className="title__Name">
              Innovation By Design Award 2016
            </figcaption>
            <figcaption className="title__Detail">Health Finalists</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Awards;
