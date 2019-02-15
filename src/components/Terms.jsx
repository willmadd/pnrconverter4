import React from 'react';
import Header from "./Header";
import Nav from "./Nav";





const Terms = () => {
  return (
    <div>
<Header />
<Nav value={"en"} />
<div className="blurb">
      <h1>TERMS AND CONDITIONS</h1>
<h3>Using PNR Converter</h3>
<p>By using PNR Converter you agree to the below</p>
<p>PNR Converter is provided as is. While we do our best to ensure that the data outputted is 100% accurate. We make no guarantees. All agents should verify that the information presented is correct before passing it on to any customers or clients.</p>

<p>PNR Converter will in no way be held liable for any errors or omissions that may occur. We will not award any kind of compensation, or take any liability for the use of PNR Converter. If you notice any errors please report them using the tab above and we will fix them right away!</p>
    </div>
    </div>
  );
};

export default Terms;