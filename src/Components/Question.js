import React from 'react'
import { Link } from "react-router-dom";
import { Flex, Spacer, Button, Text, Container, Tooltip } from '@chakra-ui/react'

const Question =({id, index, arr, questionArr})=>{
    return <div>
        <br />
        {index == 3?<>
        <Container textAlign="center">
            <h1><b>GAME OVER!!</b></h1>
            <br />
            <Link to="/">
                <Button colorScheme='purple' size='lg' width="250px">
                    New game
                </Button>    
            </Link>  
        </Container>
        </>:
        <>
        <Counter/>
        <Container bg='gray.200' maxW='900px' padding="20" centerContent>
            <h1 style={{fontSize:'4rem'}}>{questionArr.question}</h1>
        </Container>
        <ScoreAndTimeDiv hint={questionArr.hint}/>
        </>
        }                
    </div>
}
 
const Counter=()=>{
    return <Container  maxW='900px' padding="2">
        <Flex>
            <Spacer/>
            <Text>1/12</Text>
        </Flex>
    </Container>
}

const ScoreAndTimeDiv=({hint})=>{
    return  <>
    <Container maxW='900px' padding="2">
    <Flex>
        <Text>45 sec left</Text>
        <Spacer/>
        <Text>SCORE: 5</Text>
    </Flex>
    </Container>
        <Container maxW='900px' textAlign="initial" padding="2">
        <Tooltip label={hint} aria-label='A tooltip'>
        <Button colorScheme='teal' size='sm' >
            Need hint?
        </Button>
        </Tooltip>        
    </Container>
    </>
}

export default Question;