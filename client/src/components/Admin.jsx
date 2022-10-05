import React, { useState } from 'react'
import { Button } from '../styles'
import MembershipList from './MembershipList';

function Admin() {
    const [membershipShown, setMembershipShown] = useState(true);
    const [ownerShown, setOwnerShown] = useState(false);
    const [typeShown, setTypeShown] = useState(false);
    const [cityShown, setCityShown] = useState(false);
    const [propertyShown, setPropertyShown] = useState(false);

    const handleMembershipClick = event => {
        // setMembershipShown(current => !current);
        console.log(event)
        setMembershipShown(true);
        setTypeShown(false)
        setCityShown(false)
        setOwnerShown(false)
        setPropertyShown(false)
    };
    
    const handleTypeClick = event => {
        console.log(event.target)
        setMembershipShown(false);
        setTypeShown(true)
        setCityShown(false)
        setOwnerShown(false)
        setPropertyShown(false)
      };
      
      return (
        <div className='content'>
            <div className='admin-navbar'>
                <Button onClick={handleMembershipClick}>Memberships</Button>
                <Button onClick={handleTypeClick}>Types</Button>
                <Button>Cities</Button>
                <Button>Owners</Button>
                <Button>Properties</Button>
            </div>

            {membershipShown && <MembershipList />}
            {typeShown && <h2>Types lists</h2>}
            {cityShown && <h2>Cities lists</h2>}
            {ownerShown && <h2>Owners lists</h2>}
            {propertyShown && <h2>Properties lists</h2>}
        </div>
    )
}

export default Admin
