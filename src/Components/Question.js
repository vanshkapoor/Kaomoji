import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Flex, Spacer, Button, Text, Container, Tooltip } from '@chakra-ui/react'

const Question =({id, index, arr, questionArr, score, countdown, qnlen})=>{
    return <div>
        <br />
        {index == qnlen?<>
        <Container textAlign="center">
            <br />
            <br /><br />
            <h1 style={{color:'grey', fontSize:'1.2rem'}}><b>GAME OVER!!</b></h1>
            <h1 style={{fontSize:'2rem'}}><b>Your Score : {score}/{qnlen*5}</b></h1>
            <br />
            <Link to="/">
                <Button colorScheme='purple' size='lg' width="350px">
                   NEW GAME
                </Button>    
            </Link>  
        </Container>
        </>:
        <>
        
        <Counter cnt={index}/>
        <Container bg='gray.200' maxW='900px' padding="20" centerContent>
            <h1 style={{fontSize:'4rem'}}>{questionArr.question}</h1>
        </Container>
        <ScoreAndTimeDiv hint={questionArr.hint} cnt={countdown} score={score} qnlen={qnlen}/>
        </>
        }                
    </div>
}
 
const Counter=({cnt})=>{
    return <Container  maxW='900px' padding="2">
        <Flex>
            <Spacer/>
            <Text>{cnt+1}/3</Text>
        </Flex>
    </Container>
}

const ScoreAndTimeDiv=({hint, cnt, score, qnlen})=>{
    return  <>
    <Container maxW='900px' padding="2">
    <Flex>
        {cnt>0?<Text><b>{cnt}</b> seconds left</Text>:<Text color="red.400"><b>Times Up!</b></Text>}
        
        <Spacer/>
        <Text><b>SCORE: {score}/{qnlen*5}</b></Text>
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