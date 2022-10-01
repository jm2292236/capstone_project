import React from 'react'

function Property({userList, property}) {
    console.table(property)
    return (
        <div>
            <h2>{property.address}</h2>
            <p>Beds: {property.beds}</p>
            <p>Baths: {property.baths}</p>
            {property.property_images.map((ppty) => (
                <img src={ppty.image_url}></img>
            ))}

            {userList ? property.notes : ""}
        </div>
    )
}

export default Property