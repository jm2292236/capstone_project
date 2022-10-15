import React from 'react'

function Owner({ owner }) {
    return (
        <div>
            <h1>{owner.full_name}</h1>
            <h3>{owner.address}</h3>
            <h3>{owner.city_id}</h3>
            <h3>{owner.zipcode}</h3>
            <h3>{owner.phone}</h3>
            <h3>{owner.email}</h3>
        </div>
    )
}

export default Owner
