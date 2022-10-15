import React, { useState, useEffect } from 'react'
import Owner from './Owner';
import { Heading, Divider, Flex, Box, Text } from '@chakra-ui/react';

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
        <Box w='full'>
            <Heading>_Owners_</Heading>
        </Box>
        <Divider />

        <Flex flexWrap='wrap'>
            {owners.map(owner => (
                <Owner key={owner.id} owner={owner} />
            ))}
        </Flex>
        </>
    )
}

export default OwnerList
