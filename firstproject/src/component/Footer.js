import React from 'react'
import styled from 'styled-components';
import {mobile} from "../Responsive"
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter} from "@mui/icons-material";
import payment from "../asesst/payment.png"    
const Container=styled.div`
display: flex;
${mobile({flexDirection:"column"})};

`
const Left=styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo=styled.h1`

`
const Desc=styled.p`
margin: 20px 0;
`
const Social=styled.div`
display: flex;

`
const Socialicon=styled.div`
display: flex;
width: 40px;
height:40px;
border-radius: 50%;
justify-content: center;
align-items: center;
color:white;
background-color:#${props=>props.color} ;
margin-right:10px ;
`

const Center=styled.div`
flex:1;
padding: 20px;
${mobile({display:"none"})};

`
const Title=styled.div`
margin-bottom: 30px;
`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const Listitem=styled.li`
width:50%;
margin-bottom: 10px;

`

const Right=styled.div`
flex:1;
padding: 20px;
`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`
const Payment=styled.img`
width:50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
      <Logo>619 Brand.</Logo>
      <Desc>There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don’t look even slightly believable.</Desc>
      <Social>
      <Socialicon color="3B5999"><Facebook/></Socialicon>
      <Socialicon color="E4405F"><Instagram/></Socialicon>
      <Socialicon color="55ACEE"><Twitter/></Socialicon>
      <Socialicon  color="E60023"><Pinterest/></Socialicon>
      </Social>
      </Left>
      <Center>
      
      <Title>Useful Links</Title>
      <List>
      <Listitem>Home</Listitem>
      <Listitem>Cart</Listitem>
      <Listitem>Man Fashion</Listitem>
      <Listitem>Woman Fashion</Listitem>
      <Listitem>Accessories</Listitem>
      <Listitem>My Account</Listitem>
      <Listitem>Order Tracking</Listitem>
      <Listitem>Wishlist</Listitem>
      <Listitem>Wishlist</Listitem>
      <Listitem>Terms</Listitem>
      </List>
      </Center>
      <Right>
      <Title>Contact</Title>
      <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src={payment}/>
      </Right>
    </Container>
  )
}

export default Footer
