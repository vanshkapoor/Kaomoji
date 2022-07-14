import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Question from '../Components/Question';
import AnswerInput from '../Components/AnswerInput';
import {
  useParams
} from "react-router-dom";
import * as FireService from "../firebase";
import { Button,Box, Container,Flex,Input, Spacer } from '@chakra-ui/react'
import { getFirestore, collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import ReactGA from "react-ga4";  

function Questionaire() {
  const [qnlen, setQnlen] = useState(3)
  const [score, setScore] = useState(0)
  const [arr, setArr] = useState([])
  const [qarr, setQarr] = useState([])
  const [ind, setInd] = useState(0)
  const [currque, setCurrque] = useState([])
  const [loading, setLoading] = useState(true)
  const [len, setLen]=useState(0)
  const [ans, setAns] = useState("")
  const [validate, setValidate] = useState(null)
  const [cnt, setCnt] = useState(60)
  let { type } = useParams();    


  const startTimer = () => {       
      if(cnt>0){
          setCnt(cnt => cnt-1)
      }else{
      }
  }



  useEffect(()=>{          
    let ignore = false;
    let i = 1
    var subarr = []
    while(subarr.length<qnlen)
    {
      var r = Math.floor((Math.random() * 6) + 1);
      if(!ignore)
      {
        if(subarr.indexOf(r) == -1) subarr.push(r)      
      }
    }
    console.log(subarr)

    // ReactGA.initialize("G-4HLH8XDJX1");        
    // ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    setArr(subarr)
    fetchResp(type, arr)    //firebase                 
    setLoading(false)   
    setInterval(startTimer, 1000)         
  }, [])



  async function fetchResp(type, arr){ //firebase
    const qnRef =  collection(FireService.db, type)
    const quer = query(qnRef, limit(4))
    const Snap = await getDocs(quer)          

    Snap.forEach(obj => {    
      var data = obj.data()      
      {
        setQarr(qarr => [...qarr, data]);
      }      
    })   
  }  




  const updateIndexAndValidate=(e)=>{    
    e.preventDefault()
    if(ans.length<1)
    {
      alert("Value can't be empty!")
      return
    }
    setAns("")
    if(qarr[arr[ind]].answer.toLowerCase() == ans.toLowerCase())
    {      
      setValidate(true)
      setScore(score => score+5)
    }else{
      setValidate(false)
      setScore(score => score-1)
    }        
  }



  const updateIndex=()=>{
    setValidate(null)
    setAns("")
    setInd(ind+1)
    setCnt(60)
  }



    return loading == true || qarr.length<4? <p>loading</p>:<div>
      <div className="App">
        {console.log(qarr)}
        <Navbar />        
            <div >              
              {<Question index={ind} arr={arr} questionArr={qarr[arr[ind]]} score={score} countdown={cnt} qnlen={qnlen} />}
            </div>          
        <br />
        {ind<3?
        <>
        <form onSubmit={updateIndexAndValidate}>
          <Container>
          <br />        
          <p>Answer length : <b style={{color:qarr[arr[ind]].answer.length < ans.length?'red':'blue'  }}>{qarr[arr[ind]].answer.length}</b></p>
          <Input placeholder='Enter your answer' 
          border="3px solid black"
          style={{fontWeight:'bold'}}
          _placeholder={{ opacity: 1, color: '#00000' }}
          onChange={e => setAns(e.target.value)} 
          value={ans}
          size="lg"
          />
          </Container>
          <br />
          <Container textAlign="center">
            <Button colorScheme='blue' size='lg' disabled={ind==3} type="submit">
                Submit
            </Button>
          </Container>
        </form>
        <br />
        {
          validate==true?
          <div>
            <Container backgroundColor="green.400" maxW='900px' padding="2"  borderRadius="6px">
            <Flex padding="2">
              <p style={{color:'white', fontWeight:'bold', fontSize:'1.2rem'}}>Correct Answer</p>
              <Spacer/>
              <Button colorScheme='green' size='sm' onClick={updateIndex} disabled={ind==3}>
                NEXT
              </Button>
            </Flex>     
            </Container>
          </div>:<></>
        }
        {
          validate == false?
          <div>
            <Container backgroundColor="red.400" maxW='900px' padding="2"  borderRadius="6px">
              <Box>
              <Flex padding="2">
                <Box>
                  <Box>
                    <p style={{color:'white', fontWeight:'bold', fontSize:'1.2rem'}}>In-Correct Answer</p>
                  </Box>
                  <Box>
                    <p style={{color:'white', fontWeight:'bold', fontSize:'1rem'}}>Correct answer is : {qarr[arr[ind]].answer}</p>
                  </Box>
                </Box>
                <Spacer/>
                <Button colorScheme='red' size='md' onClick={updateIndex} disabled={ind==3}>
                  NEXT
                </Button>
              </Flex>        
              </Box>
            </Container>
          </div>:<></>
        }
        </>
        :
        <></>
        }                
      </div>
    </div>
  }
  
  export default Questionaire;