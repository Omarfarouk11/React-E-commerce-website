import React from 'react'
import styled from "styled-components";
import Navbar from "../component/Navbar";
import Annoncement from "../component/Annoncement";
import Products from "../component/Products";
import NewLetter from "../component/Newletter";
import Footer from "../component/Footer";
import {mobile} from "../Responsive"

const Title=styled.h1`
margin: 20px;
`
const Filtercontainer=styled.div`
display: flex;
justify-content: space-between;
`
const Filter=styled.div`
margin: 20px;
${mobile({marign:"0 20px",display:"flex",flexDirection:"column"})};

`
const Flitertext=styled.span`

font-size: 20px;
font-weight: 600;
margin-right:20px ;
${mobile({marignRight:"0"})};

`
const Select=styled.select`
padding: 10px;
font-size: 18px;
cursor: pointer;
margin-right: 20px;
${mobile({marign:"40px 0"})};

`
const Selectoption=styled.option`
font-size: 18px;
cursor: pointer;

`
const Container=styled.div`

`
const Productslist = () => {
  return (
    <Container>
    <Navbar/>
    <Annoncement/>
    <Title>Dresses</Title>
<Filtercontainer>
<Filter>
<Flitertext>Filter Products: </Flitertext>
<Select>
<Selectoption disabled selected>Color</Selectoption>
<Selectoption>White</Selectoption>
<Selectoption>Grey</Selectoption>
<Selectoption>Black</Selectoption>
<Selectoption>Yellow</Selectoption>
<Selectoption>Red</Selectoption>
<Selectoption>Blue</Selectoption>
</Select>

<Select>
<Selectoption disabled selected>Size</Selectoption>
<Selectoption>XS</Selectoption>
<Selectoption>S</Selectoption>
<Selectoption>M</Selectoption>
<Selectoption>L</Selectoption>
<Selectoption>XL</Selectoption>
<Selectoption>XLL</Selectoption>
</Select>

</Filter>
<Filter>
<Flitertext>Sort Products :</Flitertext>
<Select>
<Selectoption disabled selected>Newest</Selectoption>
<Selectoption >Price (asc)</Selectoption>
<Selectoption >Price (desc)</Selectoption>

</Select>
</Filter>
</Filtercontainer>
<Products/>
<NewLetter/>
<Footer/>
    </Container>
  )
}

export default Productslist
