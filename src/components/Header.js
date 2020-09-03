import React from "react";
import Image from "../assets/teotihuacan.jpg";

function Header(props) {
  return (
    <header id="header" className="d-inline-flex">
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="d-flex flex-column">
            <div className="justify-content-center">
              <h1 className="text-center">Juan Pablo Correa Puerta</h1>
              <br />
              <p id="description">{props.data.description}</p>
              <br />
              <div className="container text-center">
                <button className="btn btn-info">Download full CV</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col img-container" id="img_container">
          <img
            id="header_img"
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
