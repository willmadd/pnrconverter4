import React from "react";

import Header from "./Header";
import Nav from "./Nav";

const Suggestions = () => {
  return (
    <div>
      <Header />
      <Nav value={"en"} />
      <div className="resultscontainer">
        <h3>
          We're always looking for ways to improve PNR converter. If you're a
          travel agent and have any ideas that you think we could include into
          PNR converter, then please get in touch!
        </h3>

        <center>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSezV07CEXLCjVfPJfYnJP4kz14JzWgRfm9iy4OJHknjxAdJrg/viewform?embedded=true"
            width="760"
            height="1500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="googleform"
          >
            Loading...
          </iframe>
        </center>
      </div>
    </div>
  );
};

export default Suggestions;
