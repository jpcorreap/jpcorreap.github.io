import React from "react";
import Uniandes_logo from "../assets/uniandes.png";
import ITESM_logo from "../assets/itesm.png";

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
        <div className="row justify-content-center">
          {props.data["work_experience"].map((workExp, i) =>
            createExperienceTable(workExp, i)
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
