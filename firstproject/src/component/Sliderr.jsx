import React,{useState} from 'react'
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import slideritem from "./Data.js";
import {mobile} from "../Responsive";
import { NavLink } from 'react-router-dom';
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({display:"none"})};

`
const Arrow= styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin:auto;
left:${props=>props.direction ==="left" && "10px"};
right:${props=>props.direction ==="right" && "10px"};
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper=styled.div`

height:100%;
display:flex;
transform:translateX(${props=>props.slide * -100}vw);
transition: all 1000ms ease;

`
const Slide=styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:#${props=>props.bg};
`
const Slideimg=styled.div`
flex:1;
height:100%;
`
const Img=styled.img`
height:80%;
`
const Slideinfo=styled.div`
flex:1;
padding:50px;
`
const Slidetitle=styled.h1`
font-size:70px;

`
const Slidedsec=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;

`
const Slidedbtn=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`
const Sliderr = () => {
const [slideindex,setslideindex]=useState(0);

const handleclick=(direction)=>{
if(direction==="left"){
setslideindex(slideindex > 0 ? slideindex -1 : 2)
}
else if(direction === "right")
{
setslideindex(slideindex < 2 ? slideindex + 1 : 0)
}
}
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleclick("left")}>
      <ArrowLeftIcon/>
      </Arrow>
      <Wrapper slide={slideindex}>
      {slideritem.map((item)=>(
      <Slide bg={item.bg}>
      <Slideimg>
      <Img src={item.Image}/>
      </Slideimg>
      <Slideinfo>
      <Slidetitle>{item.title}</Slidetitle>
      <Slidedsec>{item.desc}</Slidedsec>
      <NavLink to={"/ProductList"}><Slidedbtn>Shop Now </Slidedbtn></NavLink>
      </Slideinfo>
      </Slide>
  ))}
    
      
    
      
      </Wrapper>
      <Arrow  direction="right" onClick={()=>handleclick("right")}>
      <ArrowRightIcon/>
      </Arrow>
    </Container>
  )
}

export default Sliderr
