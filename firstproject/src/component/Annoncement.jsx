import React from 'react'
import style from "styled-components"
const Container=style.div`
height:30px;
background-color:black;
color:#fff;
display:flex;
justify-content: center;
align-items:center;
font-size:14px;
font-weight:500;

`
const Annoncement = () => {
  return (
    <Container>
      Super Deal Free Shipping on Order Over $50
    </Container>
  )
}

export default Annoncement
