import React from 'react'
import style from "styled-components"
import {mobile} from "../Responsive"
const Container=style.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image=style.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"20vh"})};

`
const Title=style.h1`
marign:20px;
`
const Info=style.div`
position: absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
color:#fff
`
const Button=style.button`
border:none;
padding:10px;
cursor:pointer;
background-color:white;
color:grey;
font-weight:600;
font-size:18px;
`
const Categoryitem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
      <Title>{item.title}</Title>
      <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}

export default Categoryitem
