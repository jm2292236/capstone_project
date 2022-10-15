import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/layout';

function Owner({ owner: { full_name, address, city_id, zipcode, phone, email} }) {
    return (
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
            <Box w='full' border='solid'>
                <Box>
                    <Text fontWeight='bold'>{full_name}</Text>
                </Box>

                <Box w='full'>
                    <Text>{address}</Text>
                    <Text>{city_id}</Text>
                    <Text>{zipcode}</Text>
                    <Text>{phone}</Text>
                    <Text>{email}</Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default Owner
