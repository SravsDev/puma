import React from "react"
import "./Signin.css"
import {useNavigate} from "react-router-dom";

function Signin() {
  const navigate=useNavigate();
   function handleclick(){
      navigate("/Sign");
   }

 
   
  
  return (
    <>
      <div>
        <h1 className="header">My Account</h1>
      </div>
      {/* <center> */}
      <div className="sign-container">
        <div className="field">
          <div className="signbox">
            <h4 className="head1">Login/Register</h4>
            <hr className="hr" />
          </div>
          <div className="signinput">
            <p className="sp">PHONE</p>
            <input className="num" type="tel" value="+91" />
            <button className="but">GET OTP</button>
            <p className="otp">An OTP will be sent for your mobile for verification</p>
          </div>
          <div className="signlog">
            <p onClick={handleclick}>LOGIN WITH EMAIL AND PASSWORD</p> 
            {/* &nbsp;
            &nbsp; 
            <p>LOGIN WITH PHONE AND PASSWORD</p> */}
          </div>
        </div>

      </div>


      {/* </center > */}
    </>
  );
}
export default Signin;