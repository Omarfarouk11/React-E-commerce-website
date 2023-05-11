import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import {mobile} from "../Responsive";
import { NavLink } from 'react-router-dom';
const Container=styled.div`
height:60px;
${mobile({height:"50px"})};
`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;
align-items:center;
${mobile({padding:"10px 0"})};

`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language=styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})};

`
const Searchcontainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
${mobile({marginLeft:"5px"})};

`
const Searchinput=styled.input`
border:none;
outline:none;
${mobile({width:"50px"})};

`
const Center=styled.div`
flex:1;
text-align:center;
`
const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"22px"})};

`
const Sixonenine=styled.span`
background-color:black;
color:#fff;
font-weight:lighter;
padding:2px;
${mobile({padding:"0px"})};

letter-spacing:5px;
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2,justifyContent:"center"})};

`
const Menulink=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;

${mobile({fontSize:"12px",marginLeft:"10px"})};


`
;
const Navbar = () => {
  return (
    <Container >
    <Wrapper>
       <Left>
       <Language>EN</Language>
       <Searchcontainer>
       <Searchinput type={"text"} placeholder="Search Product"></Searchinput>
<SearchIcon style={{color:"gray",fontSize:"16px"}}></SearchIcon>
       </Searchcontainer>
       </Left>
       <Center>
       <NavLink style={{textDecoration:"none" , color:"black"}} to={"/"}><Logo><Sixonenine>619</Sixonenine>Brand</Logo></NavLink>
       </Center>
       <Right>
       <Menulink><NavLink  style={{textDecoration:"none" , color:"black"}}  to={"/Register"}>REGISTER</NavLink></Menulink>
       <Menulink><NavLink   style={{textDecoration:"none" , color:"black"}}  to={"/Login"}>SIGN IN</NavLink></Menulink>
       <Menulink>
       <Badge badgeContent={4} color="primary">
        <NavLink to={"/Cart"}><ShoppingCartOutlinedIcon color="action" /></NavLink>
       </Badge>
       </Menulink>
     
       </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar
