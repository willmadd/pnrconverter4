import React from "react";
import Header from "./Header";
import Nav from "./Nav";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <Nav value={"en"} />
      <div className="blurb shadow">
      <h3>Error Code 404: Page not found</h3>
      
      This page does not exist. Please head back to <a href="/" className="invalid-page-link">www.pnrconvter.com</a> to start again!
      </div>

    </div>
  );
};

export default ErrorPage;
