import React from "react";
import Image from "../assets/teotihuacan.jpg";
import EN_CV from "../assets/EN_Juan Pablo Correa Puerta.pdf";

function Header(props) {
  return (
    <header id="header" className="d-inline-flex">
      <div className="row align-items-center">
        <div className="col-md-5 col-xs-12">
          <div className="d-flex flex-column">
            <div className="justify-content-center">
              <h1 className="text-center">Juan Pablo Correa Puerta</h1>
              <img
                id="header_img_mobile"
                className="rounded-circle mx-auto d-block"
                src={Image}
                alt="Juan Pablo at Teotihuacán"
              />
              <p id="description">{props.data.description}</p>
              <div className="container text-center">
                <a href={EN_CV} download>
                  <button className="btn btn-info">Download full CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col img-container" id="img_container">
          <img
            id="header_img_desktop"
            className="rounded-circle mx-auto d-block"
            src={Image}
            alt="Juan Pablo at Teotihuacán"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
