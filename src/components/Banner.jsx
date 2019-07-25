import React from 'react';
import { Link} from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      26 June 2019 - New in PNR Converter. Table can now display a blank "notes" field, and <Link to="/intl/tr">Turkish language</Link> now available
    </div>
  );
};

export default Banner;