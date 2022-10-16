import React, { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/react';

import Filter from './Filter';
import Property from './Property';

function Lookup() {
    const [properties, setProperties] = useState([])
    const [foreclosure, setForeclosure] = useState(false)
    const [city, setCity] = useState("All")

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

    const handleChangeFC  = () => {
        setForeclosure(!foreclosure)
    }

    const propertiesToDisplay = properties.filter(property => {
        if (city === "All") {
            if (foreclosure) {
                return property.foreclosure
            } else {
                return true
            }
        } else if (foreclosure) {
            return property.city_id == city && property.foreclosure
        } else {
            return property.city_id == city
        }
    });

    return (
        <Box>
            <Filter 
                foreclosure={foreclosure} handleChangeFC={handleChangeFC}
                city={city} handleChangeCity={setCity}
            />

            <Flex flexWrap='wrap' gap='5'>
                {properties.length > 0 ? (
                    propertiesToDisplay.map((property) => (
                        <Property key={property.id} property={property}/>
                    ))
                ) : 
                    <>
                        <h2>Data not Found</h2>
                    </>
                }        
            </Flex>
        </Box>
    )
}

export default Lookup
