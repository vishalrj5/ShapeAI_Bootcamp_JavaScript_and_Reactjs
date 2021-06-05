import React from "react";

function Footer(){
  var Year = new Date().getFullYear();

  return(
    <footer>
      <p>Copyright Vishal Raju @ {Year}</p>
      </footer>
  );
}

export default Footer;