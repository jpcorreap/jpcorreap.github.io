import React from "react";
import Uniandes_logo from "../assets/uniandes.png";
import ITESM_logo from "../assets/itesm.png";
import senecareVideo from "../assets/senecare.mp4";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

function Experience(props) {
  let images = [
    <img
      src={Uniandes_logo}
      alt="Universidad de Los Andes logo"
      width="80px"
      height="auto"
    />,
    <img
      src={ITESM_logo}
      alt="Tecnológico de Monterrey logo"
      width="80px"
      height="auto"
    />,
    <img
      src={Uniandes_logo}
      alt="Universidad de Los Andes logo"
      width="80px"
      height="auto"
    />,
  ];

  function createExperienceTable(data, i) {
    let jobs = data["jobs"];

    let generateTableRows = () => {
      return jobs.map((job, k) =>
        k === 0 ? (
          <tr>
            <th scope="row" rowSpan={jobs.length} style={{ width: "5vw" }}>
              <div className="text-center vertical-center">
                <div className="col">
                  {images[i]}
                  <br />
                  <p className="job_company">{data["company"]}</p>
                </div>
              </div>
            </th>
            <td>{job["date"]}</td>
            <td>{job["title"]}</td>
            <td>{job["description"]}</td>
          </tr>
        ) : (
          <tr>
            <td>{job["date"]}</td>
            <td>{job["title"]}</td>
            <td>{job["description"]}</td>
          </tr>
        )
      );
    };

    return (
      <table className="table table-responsive" key={i}>
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">Company</th>
            <th scope="col">Date</th>
            <th scope="col">Job</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>{generateTableRows()}</tbody>
      </table>
    );
  }

  return (
    <div>
      <div className="section color_2">
        <h2 className="text-center">{props.data["work_experienceTitle"]}</h2>
        <br />
        <h3 className="text-center">Most recent project</h3>
        <p className="text-center">(and of which I am most proud 😀)</p>
        <div className="row justify-content-center">
          <video width="80%" height="auto" controls loop>
            <source src={senecareVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{ padding: 20 }}>
            <Typography variant="body2" color="textSecondary" align="center">
              * Know more about this iniciative by visiting{" "}
              <Link
                color="inherit"
                href="https://thesoftwaredesignlab.github.io/Senecare/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SeneCare
              </Link>
              .
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
