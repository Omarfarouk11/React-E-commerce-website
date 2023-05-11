import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import {mobile} from "../Responsive"
const Container=styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Title=styled.h1`
font-size: 70px;
margin: 20px;
`
const Inputcontainer=styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({width:"80%"})};

`
const Desc=styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({textAlign:"center"})};

`
const Input=styled.input`
border:none;
flex:8;
outline: none;
padding-left: 20px;
`
const Button=styled.button`
flex: 1;
outline: none;
border:none;
background-color: black;
color:#fff;
cursor: pointer;


`
const Newletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Timly Updates From Your Favorite Products</Desc>
      <Inputcontainer>
      <Input placeholder='Your Email'/>
      <Button>
      <SendIcon/>
      </Button>
      </Inputcontainer>
    </Container>
  )
}

export default Newletter
