import React from "react";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img
          src="/images/plane2.svg"
          id="headerlogo"
          height="120"
          width="120"
          alt="pnrconverter logo"
        />
      </a>
      <h1>PNR Converter </h1>
      <h3> for Galileo, Smartpoint, Worldspan, Amadeus & Sabre GDS</h3>
    </header>
  );
};

export default Header;
