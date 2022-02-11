import React from "react";
import ReactDOM from "react-dom";
import "./globals.css"
import "./styleguide.css"
import App from "./MobileApp";

function checkWindowSize(x) {
    if (x.matches) { // If media query matches
    //   document.body.style.backgroundColor = "yellow";
    ReactDOM.render(<App />, document.getElementById("app"));
    } else {
    //   document.body.style.backgroundColor = "pink";
    // DO NOTHING
    
    }
  }
  // var x = window.matchMedia("(max-width: 600px)")
  var x = window.matchMedia("(max-width: 1024px)")
  checkWindowSize(x) // Call listener function at run time