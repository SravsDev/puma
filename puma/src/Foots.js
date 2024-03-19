import React from "react"
import "./Foots.css"
function Foots() {
    return (
        <>
            <div className="foot-container">
                <div className="row">
                    <div className="foot-set">
                        <h4>SUPPORT</h4>
                        <ul className="ul1">
                            <li>Contact Us</li>
                            <li >Promotions & Sale</li>
                            <li>Track Order</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className="foot-set">
                        {/* <h4>SUPPORT</h4> */}
                        <ul className="ul1">
                            <li>FAQs</li>
                            <li >My Account</li>
                            <li>Return Policy</li>
                            <li>Tech Glossary</li>
                            <li>Initiate Return</li>
                        </ul>
                    </div>
                    <div className="foot-set">
                        <h4>ABOUT</h4>
                        <ul className="ul1">
                            <li>Company</li>
                            <li>Corporate News</li>
                            <li>Press Center</li>
                            <li>Investors</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>
                </div>

                <div className="icons">
                    <div className="pic">
                        <h3>STAY UP TO DATE</h3>

                        <div className="logos">

                            {/* <img src="images/facebook.png" alt="loading" width="50px" />
                            <img src="images/instagram.png" alt="loading" width="50px" />
                            <img src="images/printest.png" alt="loading" width="50px" />
                            <img src="images/youtube.png" alt="loading" width="50px" />
                            <img src="" alt="loading" width="50px" />
 */}

                        </div>


                    </div>

                </div>

            </div >

        </>
    );
}
export default Foots;