import React, {useEffect, useState } from 'react'

function MyProfile() {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        getProfile()
    }, []);    
    
    async function getProfile() {
        const resp = await fetch("/users/1")
        const data = await resp.json()
        if (resp.ok) {
            setUsers(data)
            console.table(data)
        }
    }

    return (
        <div>

        </div>
    )
}

export default MyProfile
