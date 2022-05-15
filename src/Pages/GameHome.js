import React from 'react'
import Navbar from '../Components/Navbar'
import { Flex, Text } from '@chakra-ui/layout'
import { Container, Box, Slider, SliderTrack, SliderThumb, SliderFilledTrack, Button } from '@chakra-ui/react'

const GameHome=()=>{
    return <div className="App">
        <Navbar />
        <br />
        <br />
        <br />
        <Container maxW='1600px'>
            <Text color="gray.600" fontWeight="medium" fontSize="lg">
                Select your Game Type
            </Text>
            <br />
            <Flex gap="8" style={{overflow:'auto'}}>
                <Box  borderWidth='1px' borderRadius='lg' textAlign="center" padding="20" bgColor="gray.100">
                    <h1 style={{fontSize:'3rem'}}>🎵</h1>
                    <Text fontSize="2xl">Songs</Text>
                </Box>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' textAlign="center" padding="20" bgColor="gray.100">
                    <h1 style={{fontSize:'3rem'}}>🎥</h1>
                    <Text fontSize="2xl">Movies</Text>
                </Box>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' textAlign="center" padding="20" bgColor="gray.100">
                    <h1 style={{fontSize:'3rem'}}>❓</h1>
                    <Text fontSize="2xl">Random</Text>
                </Box>
            </Flex>
            <br />
            <br />
            <Text color="gray.600" fontWeight="medium" fontSize="lg">
                Select your Level
            </Text>
            <br />
            <Container maxW='1600px'>
                <Box maxW='sm'>
                    <Slider defaultValue={3} min={0} max={6} step={1} onChangeEnd={(val) => console.log(val)}>
                        <SliderTrack bg='purple.100'>
                            <Box position='relative' right={10} />
                            <SliderFilledTrack bg='purple' />
                        </SliderTrack>
                        <SliderThumb boxSize={6} />
                    </Slider>
                </Box>
            </Container>
            <br />
            <br />

            {/* <Container textAlign="initial"> */}
                <Button colorScheme='purple' size='lg' width="250px">
                    Start the Game
                </Button>
            {/* </Container> */}
            <br />
            <br />

           
        </Container>      
    </div>
}

export default GameHome