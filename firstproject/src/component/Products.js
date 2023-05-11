import React from 'react'
import productdata from './Productdata';
import styled from 'styled-components';
import Productitem from "./Productitem";
import {mobile} from "../Responsive";

const Container=styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
padding: 20px;
${mobile({gridTemplateColumns:"repeat(1,1fr)"})};

`
const Products = () => {
  return (
    <Container>
      {
      productdata.map((item)=>(
      
      <Productitem item={item} key={item.id}/>
      ))
      }
    </Container>
  )
}

export default Products
