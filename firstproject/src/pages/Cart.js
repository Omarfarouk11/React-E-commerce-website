import React from 'react'
import styled from "styled-components";
import Navbar from "../component/Navbar";
import Annoncement from "../component/Annoncement";
import Footer from "../component/Footer";
import img1 from "../asesst/cart1.png"
import img2 from "../asesst/cart2.png"
import { Add, Remove } from '@mui/icons-material';
const Container=styled.div`

`
const Wrapper=styled.div`
padding: 20px;

`
const Title=styled.h1`
font-weight: 300;

text-align: center;
`
const Top=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton=styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type==="filled" && "none"};
background-color: ${props=>props.type==="filled" ? "black":"transparent"};
color: ${props=>props.type==="filled" ? "white" : "black"};
`
const TopTexts=styled.div`

`
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`
const Bottom=styled.div`
display: flex;
justify-content: space-between;
`;
const Info=styled.div`
flex: 3;
`;

const Product=styled.div`
display: flex;
justify-content: space-between;
`
const Details=styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const Productcolor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductDet=styled.div`
flex: 2;
display: flex;

`
const Productid=styled.span``
const Productname=styled.span``
const Productsize=styled.span``
const Pimg=styled.img`
width: 200px;
`
const PriceDet=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Pprice=styled.div`
font-size: 30px;
font-weight: 200;
`
const Amount=styled.div`
font-size: 24px;
margin: 5px ;
`
const Pamout=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Hr =styled.hr`
background-color: #eee;
border: none;
height: 1px;

`;
const Summry=styled.div`
flex: 1;
border: 0.5px solid lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;
const Sumitem=styled.div`
margin: 30px 0 ;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==="total" && "500"};
font-size: ${props=>props.type==="total" && "24px"};
`
const Sumtext=styled.span`

`
const Sumprice=styled.span`

`
const Sumtitle=styled.h1`
font-weight: 200;

`
const Button=styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`
const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Annoncement/>
      <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
      <TopButton>CONTINUE SHOPPING</TopButton>
      <TopTexts>
      <TopText>Shopping Bag(2)</TopText>
      <TopText>Your Wishlist (0)</TopText>
      </TopTexts>
      <TopButton type='filled'>CHECKOUT NOW</TopButton>
      </Top>
      <Bottom>
      <Info>
      <Product>
      <ProductDet>
      <Pimg src={img1}/>
      <Details>
      <Productname><b>Product:</b> JESSIE THUNDER SHOES</Productname>
      <Productid><b>Shose_ID:</b> 93813718293</Productid>
      <Productcolor color='black'/>
      <Productsize><b>Size:</b>37.5</Productsize>
      </Details>
      </ProductDet>
      
      <PriceDet>
      <Pamout>
      <Add/>
      <Amount>1</Amount>
      <Remove/>
      </Pamout>
      <Pprice>$ 50.00</Pprice>
      </PriceDet>
      </Product>
      <Hr/>
      <Product>
      <ProductDet>
      <Pimg src={img2}/>
      <Details>
      <Productname> <b>Product:</b> HAKURA T-SHIRT</Productname>
      <Productid><b>Shose_ID:</b> 93813718875</Productid>
      <Productcolor color='grey'/>
      <Productsize><b>Size:</b>M</Productsize>
      </Details>
      </ProductDet>
      
      <PriceDet>
      <Pamout>
      <Add/>
      <Amount>1</Amount>
      <Remove/>
      </Pamout>
      <Pprice>$ 30.00</Pprice>
      </PriceDet>
      </Product>
      
      
      </Info>
      <Summry>
      <Sumtitle>ORDER SUMMARY</Sumtitle>
      <Sumitem>
      <Sumtext>Subtotal</Sumtext>
      <Sumprice>$ 80.00</Sumprice>
      </Sumitem>
      <Sumitem>
      <Sumtext>Estimated Shipping</Sumtext>
      <Sumprice>$ 5.90</Sumprice>
      </Sumitem>
      <Sumitem>
      <Sumtext>Shipping Discount</Sumtext>
      <Sumprice>$ -5.90</Sumprice>
      </Sumitem>
      <Sumitem type="total">
      <Sumtext>Total</Sumtext>
      <Sumprice>$ 80.00</Sumprice>
      </Sumitem>
      <Button>CHECKOUT NOW</Button>
      </Summry>
      </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
