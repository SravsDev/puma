import React from "react"
import rupees from "./images/rupees.jpg"
function Promo(){
    return(<>
 {/* <div > */}
 <center>
    <aside  style={{backgroundColor:"lightgrey" , padding:"20px"}}>
       
        <h4 > EXTRA 10% OFF ON ORDERS ABOVE <img src={rupees} width="14px"/> 3999*</h4>
        <p>Auto-applied at checkout | *Exclusions apply</p>
      

    </aside>
    </center>

    {/* </div> */}
    </>);
}
export default Promo;