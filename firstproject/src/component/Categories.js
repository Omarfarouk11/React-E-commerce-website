import React from 'react'
import styled from "styled-components"
import categories from "./Categorydata";
import Categoryitem from './Categoryitem';
import {mobile} from "../Responsive"
const Container=styled.div`
display:flex;
padding:20px;
justify-content: space-between;
${mobile({flexDirection:"column",padding:"0px"})};


`
const Categories = () => {
  return (
    <Container>
      {
        categories.map((item)=>(
        <Categoryitem item={item}/>
        ))
      }
    </Container>
  )
}

export default Categories
