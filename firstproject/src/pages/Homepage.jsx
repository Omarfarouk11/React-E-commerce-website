import React from 'react'
import Annoncement from '../component/Annoncement'
import Navbar from '../component/Navbar'
import Sliderr from '../component/Sliderr';
import Categories from '../component/Categories';
import Products from '../component/Products';
import Newletter from '../component/Newletter';
import Footer from '../component/Footer';

function Homepage() {
  return (
    <div>
    <Annoncement/>
    <Navbar/>
    <Sliderr/>
    <Categories/>
    <Products/>
    <Newletter/>
    <Footer/>
    </div>
  )
}

export default Homepage
