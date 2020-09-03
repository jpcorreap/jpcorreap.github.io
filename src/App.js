import React from "react";
import { ReactComponent as GithubLogo } from "./assets/Github_logo.svg";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import LangUtils from "./lang_utils.js";
import Footer from "./components/Footer";

function App() {
  let langUtils = LangUtils();

  return (
    <div id="page-content-wrapper">
      <Header data={langUtils["english"]} />
      <Main data={langUtils["english"]} />
      <Footer />
    </div>
  );
}

export default App;
