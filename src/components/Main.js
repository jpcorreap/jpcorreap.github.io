import React from "react";
import Experience from "./Experience.js";
import Education from "./Education.js";

function Main(props) {
  return (
    <main>
      <Education data={props.data} />
      <Experience data={props.data} />
    </main>
  );
}

export default Main;
