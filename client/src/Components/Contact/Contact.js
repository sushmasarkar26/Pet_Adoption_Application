import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:sushmasarkar2004@gmail.com">
        sushmasarkar2004@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/sushmasarkar1/">
         sushmasarkar1
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/SushmaSarkar26">
        SushmaSarkar26
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/">
          @SushmaSarkar
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+919018395958">
          +91 9018395958
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
