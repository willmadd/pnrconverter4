import React from 'react';

const MemberMenu = (props) => {
    return (
<ul>
    <li className={props.active==="userdetails"?"active":undefined} onClick={()=>props.changeWindow('userdetails')}>User Details</li>
    <li className={props.active==="api"?"active":undefined} onClick={()=>props.changeWindow('api')}>API Key</li>
    <li className={props.active==="stats"?"active":undefined} onClick={()=>props.changeWindow('stats')}>Stats</li>
    <li className={props.active==="edit"?"active":undefined} onClick={()=>props.changeWindow('edit')}>Edit Details</li>
    <li>Log Out</li>
</ul>
    );
};

export default MemberMenu;