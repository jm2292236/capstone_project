import React, { useState, useEffect } from 'react'
import { Flex, Box, Heading, Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

function FAQList() {
    const [faqs, setFaqs] = useState([])
    
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
        <Box>
            <Flex mb='6' justifyContent='center'>
                <Heading>FAQ</Heading>
            </Flex>
            <Divider />

            {faqs.map((faq) => (
                <Accordion key={faq.id} allowMultiple>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontWeight='bold'>
                                {faq.question}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box ml='10'>
                                {faq.response}
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>            
            ))}
        </Box>
    )
}

export default FAQList
