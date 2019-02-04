import React from "react";
import Header from "./Header";
import Nav from "./Nav";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <Nav value={"en"} />
      This page does not exist. Please head back to www.pnrconvter.com to start again!

      Error Code 404: Page not found
    </div>
  );
};

export default ErrorPage;
