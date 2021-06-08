import React from "react";
import Experience from "./Experience.js";
import Education from "./Education.js";
import WorkExperience from "./WorkExperience.js";

function Main(props) {
  return (
    <main>
      <Education data={props.data} />
      <Experience data={props.data} />
      <WorkExperience />
    </main>
  );
}

export default Main;
