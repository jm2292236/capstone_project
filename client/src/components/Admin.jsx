import React, { useState } from 'react'
import { Button } from '../styles'
import { Flex, Text, Heading, Divider } from '@chakra-ui/react';

import MembershipAdmin from './MembershipAdmin';
import TypeAdmin from './TypeAdmin';
import CityAdmin from './CityAdmin';
import FaqAdmin from './FaqAdmin';
import OwnerAdmin from './OwnerAdmin';
import PropertyAdmin from './PropertyAdmin';

function Admin() {
    const [modelShown, setModelShown] = useState("faq")

    return (
        <div className='content'>
            <Flex mb='6' justifyContent='center'>
                <Heading>Admin</Heading>
                <Text>(available only if you logged in as Admin)</Text>
            </Flex>
            <Divider />

            <div className='admin-navbar'>
                <Button onClick={() => setModelShown('faq')}>FAQ</Button>
                {/* <Button onClick={() => setModelShown('membership')}>Membership</Button> */}
                <Button onClick={() => setModelShown('type')}>Types</Button>
                <Button onClick={() => setModelShown('city')}>Cities</Button>
                <Button onClick={() => setModelShown('owner')}>Owners</Button>
                <Button onClick={() => setModelShown('property')}>Properties</Button>
            </div>

            {modelShown === "faq" && <FaqAdmin />}
            {modelShown === "membership" && <MembershipAdmin />}
            {modelShown === "type" && <TypeAdmin />}
            {modelShown === "city" && <CityAdmin />}
            {modelShown === "owner" && <OwnerAdmin />}
            {modelShown === "property" && <PropertyAdmin />}
        </div>
    )
}

export default Admin
