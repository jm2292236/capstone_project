import React, { useState, useRef } from 'react'
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import { 
    Flex, Box, Text, Button, 
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton } from '@chakra-ui/react';

function Owner({ owner }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')

    const btnRef = useRef(null)
  
    return (
        <>
        <Flex onClick={onOpen} flexWrap='wrap' w='420px' bg='gray.100' p='3' paddingTop='0px' justifyContent='flex-start' cursor='pointer'>
            <Box w='full'>
                <Flex bg='blue.100' w='full' justifyContent='center'>
                    <Text fontSize='xl' fontWeight='bold'>{owner.full_name}</Text>
                </Flex>

                <Box w='full'>
                    <Text>{owner.address}</Text>
                    <Text>{owner.city.name} {owner.city.state} {owner.zipcode}</Text>
                    <Text fontWeight='bold'>{owner.phone}</Text>
                    <Text fontWeight='bold'>{owner.email}</Text>
                </Box>
            </Box>
        </Flex>

        <Modal
            onClose={onClose}
            finalFocusRef={btnRef}
            isOpen={isOpen}
            scrollBehavior={scrollBehavior}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Properties</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {owner.properties.map((property, key) => (
                    <Flex key={property.id} flexWrap='wrap' w='420px' p='3' paddingTop='0px' justifyContent='flex-start'>
                        <Box>
                            <img src={property.image_url} alt="cover" width="400" height="260"/>
                        </Box>

                        <Box w="full">
                            <Flex alignItems='center' p='1' justifyContent='space-between'>
                                {property.beds}
                                <FaBed />  {property.baths} <FaBath />  {millify(property.sq_ft)} sqft <BsGridFill />  Built: {property.year_built}
                            </Flex>

                            <Flex alignItems='center' p='1' justifyContent='space-between'>
                                <Text>{property.address} {property.zipcode}</Text>
                            </Flex>
                        </Box>
                    </Flex>
                ))}
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default Owner
