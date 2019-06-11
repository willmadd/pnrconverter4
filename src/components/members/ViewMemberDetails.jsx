import React from 'react';

const ViewMemberDetails = (props) => {
    return (
        <div>
            User Details Go Here!
            Name: {props.user.name}
            Agency: {props.user.agencyname}
        </div>
    );
};

export default ViewMemberDetails;