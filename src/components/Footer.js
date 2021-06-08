import React from "react";
import GmailIcon from "../assets/icons/gmail.png";
import FacebookIcon from "../assets/icons/facebook.jpeg";
import GitHubIcon from "../assets/icons/github.png";
import LinkedinIcon from "../assets/icons/linkedin.png";

function Footer() {
  return (
    <footer>
      <div>
        <h1 className="text-left" style={{ color: "white" }}>
          Get in touch!
        </h1>
        <div
          className="row"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <a
            className="iconContainer"
            href="mailto:juanpablocorreapuerta@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GmailIcon} className="contactIcon" alt="Gmail logo" />
          </a>
          <a
            className="iconContainer"
            href="https://github.com/jpcorreap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} className="contactIcon" alt="Github logo" />
          </a>
          <a
            className="iconContainer"
            href="https://www.linkedin.com/in/jpcorreap/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinIcon}
              className="contactIcon"
              alt="LinkedIn logo"
            />
          </a>
          <a
            className="iconContainer"
            href="https://www.facebook.com/jpcorreap/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FacebookIcon}
              className="contactIcon"
              alt="Facebook logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
