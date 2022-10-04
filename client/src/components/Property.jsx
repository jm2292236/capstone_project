import React from 'react'

function Property({userList, property}) {
    return (
       <div className='property-container'>
            <div className='property-top'>
                <div className='property-info'>
                    <h2>{property.address}, {property.city.name} {property.zipcode}</h2>
                    <p>Type: <strong>{property.type.description}</strong></p>
                    <p>Beds: {property.beds}</p>
                    <p>Baths: {property.baths}</p>
                </div>
                <div className='property-button'>
                    <button>Add/Remove from my List</button>
                </div>
            </div>
            <div className='property-images'>
                {property.property_images.map((ppty) => (
                    <img className='property-img' src={ppty.image_url}></img>
                ))}
            </div>

            {userList ? property.notes : ""}
        </div>
    )
}

export default Property