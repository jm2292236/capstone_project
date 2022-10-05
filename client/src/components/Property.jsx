import React from 'react'
import PropertyDetail from './PropertyDetail'

function handleSeeDetails() {
    console.log("property details...")
    PropertyDetail()
}

function Property({property}) {
    return (
        <div className='property-container'>
            <div className='property-top'>
                <div className='property-info'>
                    <h2>{property.address}, {property.city.name} {property.zipcode}</h2>
                    <p>
                        <strong>{property.type.description}</strong> | 
                        {property.beds} Beds | 
                        {property.baths} Baths | 
                        <strong className='foreclosure-text'>{property.foreclosure ? "Foreclosure" : ""}</strong>
                    </p>
                    <p>Year Built: {property.year_built} | {property.sq_ft} Sq Ft | {property.lot_size} Lot size</p>
                </div>
                <div className='owners-button'>
                    <button onClick={handleSeeDetails}>See details</button>
                </div>
            </div>
            
            <div className='property-images'>
                {property.property_images.map((ppty, key) => (
                    <img className='property-img' key={key} src={ppty.image_url} alt="Property"></img>
                ))}
            </div>
        </div>
    )
}

export default Property
