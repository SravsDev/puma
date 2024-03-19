import React from "react"
import "./Profile.css"
//  import { BsFillPersonFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";
import img2 from "./images/user.png"

function Profile() {
    return (
    <center style={{height:"100vh"}}>
        <div className="page">

            <h1>This is profile page</h1>
            {/* <span ><BsFillPersonFill /></span> */}
            <span> <img src={img2} style={{marginTop:"50px"}} /></span>
            <h2>Hi, Katie</h2>
            <p>Manage your Google Account</p>
            <button className="btn1"><span style={{padding:"6px"}}><BsPlusLg /></span>Add account</button> &nbsp;
            <button className="btn2"><span style={{padding:"6px"}}><BsBoxArrowRight  /></span> Sign out</button>
            <div className="spandiv">
            <span>Privacy Policy</span> &nbsp; &nbsp;
            <span>Terms and Services</span>
            </div>


        </div>
    </center>
    )
}
export default Profile;