import React, { useEffect, useState } from 'react'
import Filter from './Filter';
import Property from './Property';

function Lookup() {
    const [properties, setProperties] = useState([])
    const [foreclosure, setForeclosure] = useState(false)
    const [city, setCity] = useState(1)

    useEffect(() => {
        getProperties()
    }, []);    
    
    async function getProperties() {
        const resp = await fetch("/properties")
        const data = await resp.json()
        if (resp.ok) {
            setProperties(data)
        }
    }

    function handleChangeCity() {
        console.log(city)
        // setCity(city)
    }

    const handleChangeFC  = () => {
        setForeclosure(!foreclosure)
    }

    return (
        <div className='content'>
            <div className='filter-container'>
                <Filter 
                    foreclosure={foreclosure} handleChangeFC={handleChangeFC}
                    city={city} handleChangeCity={handleChangeCity}
                />
            </div>
            
            {properties.length > 0 ? (
                properties.map((property) => (
                    <Property key={property.id} property={property}/>
                ))
            ) : (
                <>
                    <h2>Data not Found</h2>
                </>
            )}
        </div>
    )
}

export default Lookup
