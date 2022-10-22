import React, { useState, useContext } from 'react'
import { Error } from "../styles";
import { Flex, Box, Text, Button, Input, Spacer } from '@chakra-ui/react';

import { faqContext } from './FaqAdmin'

function FaqForm() {
    const [question, setQuestion] = useState('')
    const [response, setResponse] = useState('')
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {faqs, setFaqs, formShown, setFormShown} = useContext(faqContext)

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);

        fetch("/faqs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question,
                response
            })
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((newFaq) => (setFaqs([...faqs, newFaq])));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
        <Flex bg='gray.100' direction='column' mb='3'>
            <>
            <Text>Question:</Text>
            <Input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder='Text of the question'
                size='sm'
            />

            <Text>Response:</Text>
            <Input
                value={response}
                onChange={(event) => setResponse(event.target.value)}
                placeholder='Text of the response'
                size='sm'
            />
            </>
            <Box>
                <Button type='submit' bg='green.200' mr='3'>Submit</Button>
                <Button onClick={() => setFormShown(!formShown)} bg='green.200'>Cancel</Button>
            </Box>

            {errors.map((err) => (
                <Error key={err}>{err}</Error>
            ))}

        </Flex>
        </form>
    )
}

export default FaqForm
