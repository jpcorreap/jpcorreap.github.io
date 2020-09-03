import React from "react";
import ECN_logo from "../assets/ECN.png";
import Uniandes_logo from "../assets/uniandes.png";
import ITESM_logo from "../assets/itesm.png";
import UPB_logo from "../assets/upb.png";

function Education(props) {
  let images = [
    <img
      src={ECN_logo}
      alt="École Centrale de Nantes logo"
      width="90px"
      height="auto"
    />,
    <img
      src={Uniandes_logo}
      alt="Universidad de los Andes logo"
      width="70px"
      height="auto"
    />,
    <img
      src={ITESM_logo}
      alt="Tecnológico de Monterrey logo"
      width="80px"
      height="auto"
    />,
    <img
      src={UPB_logo}
      alt="Universidad Pontificia Bolivariana logo"
      width="80px"
      height="auto"
    />,
  ];

  function createCard(data, i) {
    return (
      <div className="card col-xxl-2 d-inline-flex" key={i}>
        <div className="card-header text-center">
          <div className="vertical-center">
            <div className="col">{images[i]}</div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <h3 className="list-group-item">{data.title}</h3>
          <li className="list-group-item">{data.institution}</li>
          <li className="list-group-item">{data.city}</li>
          <li className="list-group-item">{data.date}</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <div className="section color_1">
        <h2 className="text-center">{props.data["educationTitle"]}</h2>
        <div className="row justify-content-center">
          {props.data["education"].map((education, i) =>
            createCard(education, i)
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
