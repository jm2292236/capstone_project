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
    ModalCloseButton,
} from '@chakra-ui/react'

function Property({ property }) {
    const modalImages = useDisclosure()
    const modalOwner = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')

    const btnRef = useRef(null)

    return (
        <Flex flexWrap='wrap' w='420px' p='3' paddingTop='0px' justifyContent='flex-start'>
            <Box>
                <img src={property.image_url} alt="cover" width="400" height="260"/>
            </Box>

            <Box w="full">
                <Flex alignItems='center' p='1' justifyContent='space-between'>
                    {property.beds}
                    <FaBed />  {property.baths} <FaBath />  {millify(property.sq_ft)} sqft <BsGridFill />  Built: {property.year_built}
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
            </Box>
            
            <Flex w='full' alignItems='center' p='1' justifyContent='space-between' bg='gray.100'>
                <Button onClick={modalImages.onOpen} colorScheme='blue'>Images</Button>
                <Button onClick={modalOwner.onOpen} colorScheme='blue'>Owner</Button>
            </Flex>
            
            {/* Modal for images */}
            <Modal
                onClose={modalImages.onClose}
                finalFocusRef={btnRef}
                isOpen={modalImages.isOpen}
                scrollBehavior={scrollBehavior}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Property Images</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {property.property_images.map((image, key) => (
                            <Box key={key} p='3'>
                                <img src={image.image_url} alt="Property" width="400" height="260"></img>
                            </Box>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={modalImages.onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Modal for owners */}
            <Modal
                onClose={modalOwner.onClose}
                finalFocusRef={btnRef}
                isOpen={modalOwner.isOpen}
                scrollBehavior={scrollBehavior}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Property Owner</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {property.property_owners.map((owner, key) => (
                            <Box key={owner.owner.id} p='3' bg='gray.100'>
                                <Text fontWeight='bold'>{owner.owner.full_name}</Text>
                                <Text>{owner.owner.address}</Text>
                                <Text>{owner.owner.city.name} {owner.owner.city.state}</Text>
                                <Text color='blue.400' fontWeight='bold'>{owner.owner.phone}</Text>
                                <Text color='blue.400' fontWeight='bold'>{owner.owner.email}</Text>
                            </Box>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={modalOwner.onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default Property
