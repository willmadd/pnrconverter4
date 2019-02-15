import React from 'react';
import { Link} from "react-router-dom";


const Gdpr = (props) => {
  return (
    <div className="gdpr shadow">
      <p>By continuing to browse the site you are agreeing to our use of cookies. For more details about cookies see our cookie policy.</p>
      <button onClick={()=>{props.GDPRaccept()}}>Accept</button>
      <Link to ="/privacy">See privacy Policy</Link>


    </div>
  );
};

export default Gdpr;