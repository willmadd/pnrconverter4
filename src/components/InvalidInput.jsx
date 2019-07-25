import React from 'react';

const InvalidInput = () => {
  return (
    <div className="blurb">
    <h3>Invalid Input</h3>
      Sorry, we could not convert your input. It could be that an airport code is incorrect, or an airline iatacode. Please see our <a className="invalid-page-link" href="/how-to-use-pnrconverter">How PNR Converter Works</a> page. If you've entered the flight details nicorrectly and it's still not working, let us know via our <a href="/suggestions" className="invalid-page-link">Contact Us</a>, and we'll fix the situation! 
    </div>
  );
};

export default InvalidInput;