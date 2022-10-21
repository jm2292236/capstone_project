import React, { useState, useEffect } from 'react'
import { Flex, Box, Text, Button, Divider, Spacer } from '@chakra-ui/react';
import FaqForm from './FaqForm';

function FaqAdmin() {
    const [faqs, setFaqs] = useState([])
    const [formShown, setFormShown] = useState(false)

    useEffect(() => {
        getFaqs()
    }, []);
    
    async function getFaqs() {
        const resp = await fetch("/faqs")
        const data = await resp.json()
        if (resp.ok) {
            setFaqs(data)
        }
    }

    return (
        <div>
            <Flex mb='6' justifyContent='center'>
                <Text fontWeight='bold' mt='5'>Editing FAQs</Text>
            </Flex>
            <Divider />

            <Button bg='green.200' onClick={() => (setFormShown(!formShown))}>Add new FAQ</Button>
            {formShown && <FaqForm />}

            {faqs.map((faq) => (
                <Flex key={faq.id}>
                <Box>
                    <Text minWidth='400' wrap='wrap'>{faq.question}</Text>
                </Box>
                <Spacer />
                <Box>
                    <Button bg='green.200' mr='3'>Edit</Button>
                </Box>
                <Box>
                    <Button bg='green.200' mb='3'>Delete</Button>
                </Box>
                </Flex>
            ))}
        </div>
    )
}

export default FaqAdmin
