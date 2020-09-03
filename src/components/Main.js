import React from "react";
import Experience from "./Experience.js";
import Education from "./Education.js";

function Main(props) {
  return (
    <main>
      <Experience data={props.data} />
      <Education data={props.data} />
    </main>
  );
}

export default Main;
