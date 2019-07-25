import React from "react";

const MemberMenu = props => {
  return (
    <ul className="member-menu">
      <li
        className={props.active === "userdetails" ? "active" : undefined}
        onClick={() => props.changeWindow("userdetails")}
      >
        User Details
      </li>
      <li
        className={props.active === "api" ? "active" : undefined}
        onClick={() => props.changeWindow("api")}
      >
        API Key
      </li>
      <li
        className={props.active === "contact" ? "active" : undefined}
        onClick={() => props.changeWindow("contact")}
      >
        Contact Us
      </li>
      <li
        className={props.active === "edit" ? "active" : undefined}
        onClick={() => props.changeWindow("edit")}
      >
        Edit Details
      </li>
      <li
        className={props.active === "invoices" ? "active" : undefined}
        onClick={() => props.changeWindow("invoices")}
      >
        Invoices
      </li>
      <li className="icon-logout" onClick={()=>props.logUserOutMembersArea()}>Log Out</li>
    </ul>
  );
};

export default MemberMenu;
