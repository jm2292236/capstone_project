import React, { useEffect, useState } from 'react'

function Filter({ foreclosure, handleChangeFC, city, handleChangeCity}) {
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
        <div>
            <select className="select-city" name="city" value={city} onChange={() => handleChangeCity()}  >  
                <option>Select City</option>  
                {cities.map((city, key) => {
                    console.log(city.id)
                    return <option key={key} value={city.id}>{city.name}</option>;  
                })}
            </select>

            <label>
                <input type="checkbox" checked={foreclosure} onChange={handleChangeFC}/>
                Foreclosures Only
            </label>
        </div>
    )
}

export default Filter
