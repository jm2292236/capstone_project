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
            setProfile(data)
            console.table(data)
        }
    }

    return (
        <div className='content'>
            <h1> User Profile </h1>
            <p>First name: <strong>{profile.first_name}</strong></p>
            <p>Last name: <strong>{profile.last_name}</strong></p>
            <p>Base city: <strong>{profile.base_city}</strong></p>
            <p>Admin?: <strong>{profile.admin ? "Yes" : "No"}</strong></p>
        </div>
    )
}

export default MyProfile
