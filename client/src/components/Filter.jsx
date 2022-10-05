import React, { useEffect, useState } from 'react'

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
        <div className='filter-container'>
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
        </div>
    )
}

export default Filter
