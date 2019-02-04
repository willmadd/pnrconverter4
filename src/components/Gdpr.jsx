import React from 'react';

const Gdpr = (props) => {
  return (
    <div className="gdpr shadow">
      <p>By continuing to browse the site you are agreeing to our use of cookies. For more details about cookies see our cookie policy.</p>
      <button onClick={()=>{props.GDPRaccept()}}>Accept</button>
      <a href="">See privacy Policy</a>


    </div>
  );
};

export default Gdpr;