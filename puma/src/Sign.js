import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Sign.css"
function Sign() {
  const navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState({
    error: "",
    password: ""
  })
  const emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function validation() {
    // let emails=email.trim()

    if ((email != "") && (password.length >8)) {
      navigate("/profile")
    }
    else {

      if (email.trim() === "") {
        seterror((error) => ({ ...error, email: "Enter email address" }))
      }
      else if (!emailpattern.test(email)) {
        seterror((error) => ({ ...error, email: "Enter valid email address" }))
      }
      else {
        seterror((error) => ({ ...error, email: "" }))
      }


      // let pwd=password.trim()

      if (password.trim() === "") {
        seterror((error) => ({ ...error, password: "Enter password" }))
      }
      else if (password.trim().length < 8) {
        seterror((error) => ({ ...error, password: "Password length is 8 characters" }))
      }
      else {
        seterror((error) => ({ ...error, password: "" }))
      }
     }

  }

  function handlechange(e){
    setemail(e.target.value);
    // setpassword(e.target.value);
    seterror("");

  }
  function handlepass(e){
    setpassword(e.target.value);
    seterror("");
  }


  return (
    <>




      <div className="signcontainer">

        <div className="contain">
          <h2 className="heading">Form Using React</h2>


          <p>Email</p>
          <input type="email" className="txt" value={email} onChange={handlechange }  />

          {
            error.email && <span className="text-danger">{error.email}</span>
          }


          <p>Password</p>
          <input type="password" className="txt" value={password} onChange={handlepass } />

          {
            error.password && <span className="text-danger">{error.password}</span>
          }



          <button className="btn" onClick={validation}>Login</button>

        </div>
      </div>
    </>
  );
}
export default Sign;