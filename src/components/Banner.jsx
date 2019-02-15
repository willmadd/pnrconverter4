import React from 'react';
import { Link} from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      Welcome to new PNR Converter Version 4. See what's new <Link to ={`/articles/whats-new-in-pnr-converter`} >Here!</Link> We would love to hear what you think, <Link to ={`/make-a-suggestion`} >Get in Touch</Link> and let us know
    </div>
  );
};

export default Banner;