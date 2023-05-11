import React,{useState} from 'react'
import styled from 'styled-components'
import Annoncement from '../component/Annoncement'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newletter from '../component/Newletter';
import Image from "../asesst/p1.png";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Mobile from "../Responsive.js";
const Conatiner =styled.div`

`;
const Wrapper =styled.div`
padding: 50px;
display: flex;
${Mobile({flexDirection:"column",padding:"10px"})};

`;
const Imagecontainer =styled.div`
flex:1;
`;
const Img =styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;
const Infocontainer =styled.div`
flex:1;
padding: 0px 50px;
`;
const Title =styled.h1`
font-weight: 200;
font-size: 50px;
`;
const Desc =styled.p`
margin: 20px 0;
font-size: 24px;
`;
const Price =styled.span`
font-weight: 100;
font-size: 40px;
`;
const Filtercontainer=styled.div`
margin: 80px 0;
display: flex;
justify-content: space-between;
width: 50%;
`
const Filter=styled.div`
display: flex;
align-items: center;
`
const Select=styled.select`
padding: 10px;
font-size: 18px;
cursor: pointer;
margin-right: 20px;
`
const Selectoption=styled.option`
font-size: 18px;
cursor: pointer;
padding: 5px;
`
const Filtertitle=styled.h2`
margin-right: 20px;

`
const Filtercolor=styled.div`
width: 25px;
height: 25px;
background-color: ${props=>props.color};
border-radius: 50%;
margin-left: 20px;
cursor: pointer;

`
const Addcontainer=styled.div`
margin: 80px 0;
display: flex;
justify-content: space-between;
width: 50%;
align-items: center;
`;
const Amountcontainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;
const Amout=styled.div`
padding: 5px;
border: 3px solid teal;
border-radius: 10px;
margin: 0 20px;
width: 30px;
text-align: center;
`;
const Button=styled.button`

padding: 15px;
background-color: transparent;
border: 1px solid teal;
letter-spacing: 1px;
font-size: 18px;
&:hover{
      background-color: #f8f4f4;
  }
font-weight: bold  ;
cursor: pointer;
`;
const Product = () => {
const [count, setcount] = useState(1);

  return (
    <Conatiner>
      <Navbar/>
      <Annoncement/>
      
      <Wrapper>
      <Imagecontainer>
      <Img src={Image}/>
      </Imagecontainer>
      <Infocontainer>
      <Title>Denim Jumpsuit</Title>
      <Desc> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
      iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
      tristique tortor pretium ut. Curabitur elit justo, consequat id
      condimentum ac, volutpat ornare.</Desc>
      <Price>$ 20.00</Price>
      <Filtercontainer>
      <Filter>
      <Filtertitle>Color</Filtertitle>
      <Filtercolor color="black"/>
      <Filtercolor color="darkblue"/>
      <Filtercolor color="gray"/>
      </Filter>
      <Filter>
      <Filtertitle>Size</Filtertitle>
      <Select>
       
        <Selectoption selected>XS</Selectoption>
        <Selectoption>S</Selectoption>
        <Selectoption>M</Selectoption>
        <Selectoption>L</Selectoption>
        <Selectoption>XL</Selectoption>
        <Selectoption>XLL</Selectoption>
       </Select>
      </Filter>
      </Filtercontainer>
      <Addcontainer>
      <Amountcontainer>
      <RemoveIcon onClick={()=>setcount(count - 1 )}></RemoveIcon>
      <Amout>{count}</Amout>
      <AddIcon onClick={()=>setcount(count + 1 )}/>
      </Amountcontainer>
      <Button>Add To Cart</Button>
      </Addcontainer>
      </Infocontainer>
      </Wrapper>
      <Newletter/>
      <Footer/>
    </Conatiner>
  )
}

export default Product
