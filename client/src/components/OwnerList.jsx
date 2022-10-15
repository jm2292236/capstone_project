import React, { useState, useEffect } from 'react'
import Owner from './Owner';

function OwnerList() {
    const [owners, setOwners] = useState([])

    useEffect(() => {
        getOwners()
    }, []);    
    
    async function getOwners() {
        const resp = await fetch("/owners")
        const data = await resp.json()
        if (resp.ok) {
            setOwners(data)
        }
    }

    return (
        <div>
            {owners.map(owner => (
                <Owner key={owner.id} owner={owner} />
            ))}
        </div>
    )
}

export default OwnerList
