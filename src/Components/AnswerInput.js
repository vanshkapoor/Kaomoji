import React from 'react'
import { Input, Container } from '@chakra-ui/react'


const AnswerInput=()=>{
    return <Container>
        <br />
        <Input placeholder='Enter your answer' 
        _placeholder={{ opacity: 1, color: '#5C79E0' }}
        size="lg"
        />
    </Container>
    
}

export default AnswerInput