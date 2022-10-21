import React, { useState } from 'react'
import { Flex, Box, Text, Button, Input, Spacer } from '@chakra-ui/react';

function FaqForm() {
    const [question, setQuestion] = useState('')
    const [response, setResponse] = useState('')

    const handleChangeQuestion = (event) => setQuestion(event.target.value)
    const handleChangeResponse = (event) => setResponse(event.target.value)

    return (
        <Flex bg='gray.100' direction='column' mb='3'>
            <>
            <Text>Question:</Text>
            <Input
                value={question}
                onChange={handleChangeQuestion}
                placeholder='Text of the question'
                size='sm'
            />

            <Text>Response:</Text>
            <Input
                value={response}
                onChange={handleChangeResponse}
                placeholder='Text of the response'
                size='sm'
            />
            </>
            <Box>
                <Button bg='green.200' mr='3'>Submit</Button>
                <Button bg='green.200'>Cancel</Button>
            </Box>
        </Flex>
    )
}

export default FaqForm
