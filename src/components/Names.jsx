import React from 'react';

const Names = (props) => {
  return (
    <div className="names-box">
      <b>Itinerary For:</b>
      {props.names.map((name)=>{
        return <p key={name}>{name}<br/></p>;
      })}
    </div>
  );
};

export default Names;