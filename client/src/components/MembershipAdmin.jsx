import React, { useState, useEffect } from 'react'
import { Flex, Box, Text, Button, Divider } from '@chakra-ui/react';

function MembershipAdmin() {
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
            <Flex mb='6' justifyContent='center'>
            <Text fontWeight='bold' mt='5'>Editing Memberships</Text>
            </Flex>
            <Divider />

            {memberships.map((membership) => (
                <Flex key={membership.id}>
                    <Text>{membership.description}</Text>
                </Flex>
            ))}
        </div>
    )
}

export default MembershipAdmin
