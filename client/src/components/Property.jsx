import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';

import PropertyDetail from './PropertyDetail'

function handleSeeDetails() {
    console.log("property details...")
    PropertyDetail()
}

function Property({ property }) {
    return (
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start'>
            <Box>
                <img src={property.image_url} alt="cover" width="400" height="260"/>
            </Box>

            <Box w="full">
                <Flex alignItems='center' p='1' justifyContent='space-between'>
                    {property.beds}
                    <FaBed /> | {property.baths} <FaBath /> | {millify(property.sq_ft)} sqft <BsGridFill /> | Built: {property.year_built}
                </Flex>

                <Flex alignItems='center' p='1' justifyContent='space-between'>
                    <Text>{property.address}, {property.city.name} {property.city.state} {property.zipcode}</Text>
                </Flex>
                
                <Flex alignItems='center' p='1' justifyContent='space-between'>
                    <Text fontWeight='bold'>{property.type.description}</Text>
                    <Text fontWeight='bold' bg='red' color='white'>{property.foreclosure ? "Foreclosure" : ""}</Text>
                </Flex>

                <Text fontSize='md'>
                    {property.notes.length > 40 ? property.notes.substring(0, 40) + '...' : property.notes}
                </Text>
                <div className='owners-button'>
                    <button onClick={handleSeeDetails}>See details</button>
                </div>
            </Box>
            
            {/* <div className='property-images'>
                {property.property_images.map((ppty, key) => (
                    <img className='property-img' key={key} src={ppty.image_url} alt="Property"></img>
                ))}
            </div> */}
        </Flex>
    )
}

export default Property
