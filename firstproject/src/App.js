import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Productslist from "./pages/Productslist";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter as Router , Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/ProductList" element={<Productslist/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Cart" element={<Cart/>}/>

          


        </Routes>
      </Router>
      


 

 



</div>
  );
}

export default App;
