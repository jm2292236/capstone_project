import React, { useEffect, useState } from 'react'
import Property from './Property';

function MyList() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        getProperties()
    }, []);    
    
    async function getProperties() {
        const resp = await fetch("/user_properties")
        const data = await resp.json()
        if (resp.ok) {
            setProperties(data)
            console.table(data)
        }
    }

    return (
        <div className='content'>
            {properties.length > 0 ? (
                properties.map((property) => (
                    <Property key={property.id} userList={true} property={property}/>
                ))
            ) : (
                <>
                    <h2>No Properties Found</h2>
                </>
            )}
        </div>
    )
}

export default MyList
