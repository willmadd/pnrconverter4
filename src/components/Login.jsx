import React from "react";
import Header from "./Header";
import Nav from "./Nav";

const Login = () => {
  return (
    <div>
      <Header />
      <Nav value={"en"} />

      <div className="blurb shadow about-us">
        Log in!
    </div>
    </div>
  );
};

export default Login;
