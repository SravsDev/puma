import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import img1 from "./images/cart.png"
import { FaSearch } from "react-icons/fa";
const Navbar = (props) => {
  return (
    <div className='container'>
        <div className="logo">
            <img src="https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover.png" alt="logo" />
        </div>
        <div className="searchbtn">
          <input type="text" placeholder="Search Content"/>
          <span><FaSearch /></span>

        </div>
        <div className='contents'>
            <ul className='navbar'>

           <Link to="/"><li >Main</li></Link>
            <Link to="/Profile"><li>Profile</li></Link> 
            
           <Link to="/Sign"><li>Sign</li></Link>
          {/* <Link to="/Main" ><li >Main</li></Link> */}
          <Link to="/Signin"><li>Signin</li></Link> 
          <Link to="/Product"><li>Product</li></Link> 
          <Link to="/Cart"><li onClick={()=>props.handleshow(true)} >Cart</li></Link>
          <Link  ><img src={img1} alt="cart image" width="30px"/> <span>{props.count}</span></Link>
          

           
       </ul>
            
        </div>
    </div>
  );
}

export default Navbar;