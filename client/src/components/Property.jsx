import React from 'react'

function Property({userList, property}) {
    return (
        <div>
            <h2>{property.address}</h2>
            {userList ? property.notes : ""}
        </div>
    )
}

export default Property