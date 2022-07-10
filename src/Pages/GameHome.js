import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Navigate, useNavigate } from "react-router-dom";
import { Flex, Text } from '@chakra-ui/layout'
import { Container, Box, Slider, SliderTrack, SliderThumb, SliderFilledTrack, Button, Link, Image } from '@chakra-ui/react'
// import app from "../firebase";
import * as FireService from "../firebase"
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"

import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';

const GameHome=()=>{
    const [gameType, setGameType] = useState(null)
    const [gameLevel, setGameLevel] = useState(3)
    const [start, setStart] = useState(false)
    const [qarr,setQarr] = useState([])
    const navigate = useNavigate();

    const StartGame=()=>{
        
        if(gameType == null)
        {
            alert("select game type")
            return;
        }
        navigate(`/play/${gameType}/${gameLevel}`)
    }

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
                <Image src={img1} width="400px" height="250px" borderRadius='lg' border={gameType=="music"?"4px solid purple":""} cursor="pointer" onClick={() => setGameType("music")}/>
                <Image src={img2} width="400px" height="250px" borderRadius='lg' border={gameType=="movie"?"4px solid purple":""} cursor="pointer" onClick={() => setGameType("movie")}/>
                <Image src={img3} width="400px" height="250px" borderRadius='lg' border={gameType=="random"?"4px solid purple":""} cursor="pointer" onClick={() => setGameType("random")}/>
                {/* <TypeBox type="Songs" emoji="🎵" isActive={gameType=="music"?true:false} onClickFn={() => setGameType("music")} /> */}
                {/* <TypeBox type="Movies" emoji="🎥" isActive={gameType=="movie"?true:false} onClickFn={() => setGameType("movie")} /> */}
                {/* <TypeBox type="Random" emoji="❓" isActive={gameType=="random"?true:false} onClickFn={() => setGameType("random")} /> */}
            </Flex>
            <br />
            <br />
            <Text color="gray.600" fontWeight="medium" fontSize="lg">
                Select your Level : {gameLevel}
            </Text>
            <br />
            <Container maxW='1600px'>
                <Box maxW='sm'>
                    <Slider defaultValue={gameLevel} min={0} max={6} step={1} onChangeEnd={(val) => setGameLevel(val)}>
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

            <Button colorScheme='purple' size='lg' width="350px" onClick={() => StartGame()}>
                START THE GAME
            </Button>            
            <br />
            <br />

        </Container>      
    </div>
}


const TypeBox =(params)=>{
    return <Box  borderWidth='3px' borderRadius='lg' textAlign="center" padding="20" 
                 bgColor={params.isActive?"purple.200":"gray.100"} onClick={params.onClickFn}
                 cursor="pointer"
            >
                    <h1 style={{fontSize:'3rem'}}>{params.emoji}</h1>
                    <Text fontSize="2xl">{params.type}</Text>
            </Box>
}

export default GameHome