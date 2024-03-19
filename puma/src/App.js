import React, { useState } from "react"
import "./App.css"
import Main from "./Main"
import Navbar from "./Navbar"
// import Home from "./Home"
import Profile from "./Profile"
// import Kids from "./Kids"
import Sign from "./Sign"
import Signin from "./Signin"
import Foots from "./Foots"
import Product from "./Product"

import Cart from "./Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  const [cart, setCart] = useState([])
  const [showcart, setShowcart] = useState(false)
  // const [count, setCount] = useState(0)
  //  console.log(count);
  function Addtocart(data) {
    // console.log(data);
    setCart([...cart, { ...data, quantity: 1 }])
    // setCount(count + 1);
  }
  const handleshow = (value) => {
    setShowcart(value)
  }





  return (
    <>
      <BrowserRouter>

        <Navbar count={cart.length}  handleshow={handleshow} />
        {/* { 
        showcart?
        <Cart  cart={cart}/>:<Product  Addtocart={Addtocart}/>
        }
        
        <Cart  cart={cart}/>
        */}


        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/Profile" element={< Profile />} />
          {/* <Route path="/Kids" element={<Kids />} /> */}
          <Route path="/Sign" element={<Sign />} />
          {/* <Route path="/Main" element={<Main />} /> */}
          <Route path="/Signin" element={<Signin />} />

          {
            showcart ?
              <Route path="/Cart" element={<Cart cart={cart} />} /> :

              <Route path="/Product" element={<Product Addtocart={Addtocart} />} />
          }
        </Routes>


      </BrowserRouter>
      <Foots />


    </>
  );

}
export default App;