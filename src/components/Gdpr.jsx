import React from 'react';

const Gdpr = (props) => {
  return (
    <div className="gdpr shadow">
      <h1>We value your privacy</h1>
      <p>We and our partners use technology such as cookies on our site to personalise content and ads, provide social media features, and analyse our traffic. Click below to consent to the use of this technology across the web. You can change your mind and change your consent choices at anytime by returning to this site.</p>
      <button onClick={()=>{props.GDPRaccept()}}>Accept</button>
      <a href="">See privacy Policy</a>


    </div>
  );
};

export default Gdpr;