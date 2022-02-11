import React from "react";
import ReactDOM from "react-dom";
import "./globals.css"
import "./styleguide.css"
import App from "./DesktopApp";

function checkWindowSize(x) {
    if (x.matches) { // If media query matches
    // DO NOTHING
    } else {
    ReactDOM.render(<App />, document.getElementById("app"));
    }
  }
  // var x = window.matchMedia("(max-width: 600px)")
  var x = window.matchMedia("(max-width: 1024px)")
  checkWindowSize(x) // Call listener function at run time

