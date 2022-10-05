import React, { useState, useEffect } from 'react'
import MembershipForm from './MembershipForm';

function MembershipList() {
    const [memberships, setMemberships] = useState([])

    useEffect(() => {
        getMemberships()
    }, []);    
    
    async function getMemberships() {
        const resp = await fetch("/memberships")
        const data = await resp.json()
        if (resp.ok) {
            setMemberships(data)
        }
    }

    return (
        <div>
            {memberships.map((membership) => (
                <MembershipForm key={memberships.id} membership={membership}/>
            ))}
        </div>
    )
}

export default MembershipList
