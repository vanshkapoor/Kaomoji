import React from 'react'
import { Flex, Spacer, Button, Text, Container } from '@chakra-ui/react'

const Question =()=>{
    return <div>
        <br />
        <Counter/>
        <Container bg='gray.200' maxW='900px' padding="20" centerContent>
                <h1 style={{fontSize:'4rem'}}>🐣</h1>
        </Container>    
        <ScoreAndTimeDiv/>   
    </div>
}

const Counter=()=>{
    return  <Container  maxW='900px' padding="2">
    <Flex>
        <Spacer/>
        <Text>1/12</Text>
    </Flex>
</Container>
}

const ScoreAndTimeDiv=()=>{
    return  <>
    <Container maxW='900px' padding="2">
    <Flex>
        <Text>45 sec left</Text>
        <Spacer/>
        <Text>SCORE: 5</Text>
    </Flex>
</Container>
<Container maxW='900px' textAlign="initial" padding="2">
<Button colorScheme='teal' size='sm' >
    Need hint?
  </Button>
</Container>
</>
}

export default Question;