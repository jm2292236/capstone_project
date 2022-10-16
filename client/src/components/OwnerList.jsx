import React, { useState, useEffect } from 'react'
import { Heading, Divider, Flex, Box } from '@chakra-ui/react';

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
        <>
        <Flex mb='6' justifyContent='center'>
            <Heading>Owners</Heading>
        </Flex>
        <Divider />

        <Flex flexWrap='wrap' gap='5'>
            {owners.map(owner => (
                <Owner key={owner.id} owner={owner} />
            ))}
        </Flex>
        </>
    )
}

export default OwnerList
