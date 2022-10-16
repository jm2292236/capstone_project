import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react';

function Filter({ foreclosure, handleChangeFC, city, handleChangeCity }) {
    const [cities, setCities] = useState([])

    useEffect(() => {
        getCities()
    }, []);
    
    async function getCities() {
        const resp = await fetch("/cities")
        const data = await resp.json()
        if (resp.ok) {
            setCities(data)
        }
    }
    return (
        <Flex alignItems='center' p='6' justifyContent='space-around'>
        <div>
                <label htmlFor="city">Select city:</label>
                <select className="select-city" name="city" value={city} onChange={(e) => handleChangeCity(e.target.value)}>
                    <option>All</option>
                    {cities.map((city, key) => {
                        return <option key={key} value={city.id}>{city.name}</option>;
                    })}
                </select>
            </div>

            <label>
                <input type="checkbox" checked={foreclosure} onChange={handleChangeFC}/>
                Foreclosures Only
            </label>
        </Flex>
    )
}

export default Filter
