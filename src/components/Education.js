import React from "react";
import ECN_logo from "../assets/ECN.png";
import Uniandes_logo from "../assets/uniandes.png";
import ITESM_logo from "../assets/itesm.png";
import UPB_logo from "../assets/upb.png";
import UTP_logo from "../assets/utp.png";
import Grid from "@material-ui/core/Grid";

function Education(props) {
  let images = [
    <img
      src={UPB_logo}
      alt="Universidad Pontificia Bolivariana logo"
      width="80px"
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
      src={ECN_logo}
      alt="École Centrale de Nantes logo"
      width="90px"
      height="auto"
    />,
    <img
      src={UTP_logo}
      alt="Universidad Tecnológica de Pereira logo"
      width="auto"
      height="80px"
    />,
  ];

  function createCard(data, i) {
    return (
      <div
        className="card col-sm-12 col-md-4 col-lg-4 col-xl-2  d-inline-flex"
        key={i}
        style={{ padding: 0 }}
      >
        <span
          className="card-header text-center"
          style={{ minHeight: 230, width: "100%" }}
        >
          <Grid
            container
            style={{ height: "100%" }}
            direction="row-reverse"
            justify="space-between"
            alignItems="center"
          >
            <div className="col">{images[i]}</div>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ fontWeight: "bolder", marginTop: 5 }}
            >
              <h3 style={{ paddingBottom: 0, marginBottom: 0 }}>
                {data.title}
              </h3>
            </Grid>
          </Grid>
        </span>
        <ul className="list-group list-group-flush">
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
