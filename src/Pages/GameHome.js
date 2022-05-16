import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Flex, Text } from '@chakra-ui/layout'
import { Container, Box, Slider, SliderTrack, SliderThumb, SliderFilledTrack, Button } from '@chakra-ui/react'
// import app from "../firebase";
import * as FireService from "../firebase"
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const GameHome=()=>{

    useEffect(()=>{
        const qnRef =  collection(FireService.db, "questions")
        getDocs(qnRef).then(resp => {
            console.log(resp.docs.map(docSnapshot => docSnapshot.data()));
        }).catch(error => {
            console.log(error)
        })
    }, [])



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
                <TypeBox type="Songs" emoji="🎵"/>
                <TypeBox type="Movies" emoji="🎥"/>
                <TypeBox type="Random" emoji="❓"/>
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


const TypeBox =(params)=>{
    return <Box  borderWidth='1px' borderRadius='lg' textAlign="center" padding="20" bgColor="gray.100">
                    <h1 style={{fontSize:'3rem'}}>{params.emoji}</h1>
                    <Text fontSize="2xl">{params.type}</Text>
                </Box>
}

export default GameHome