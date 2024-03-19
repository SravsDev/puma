import React from "react"
import "./Cart.css"
import { useState, useEffect } from "react"
function Cart({ cart }) {
    const [newcart, setNewcart] = useState([])
    useEffect(() => {
        setNewcart(cart)
    }, [cart])

    return (


        <div className="cartcart" >

            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Your Cart</h2>


           

                {

                    newcart.map((cartitem, cartindex) => {
                        return (
                            
                            <div className="cartbunch">


                                     <img src={cartitem.image} width="50px" />
                                    <span> {cartitem.title}</span>
                                    <div className="cartbtn">
                                      <button className="cartbtns"
                                        onClick={() => {
                                            const _cart = newcart.map((item, index) => {
                                                return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                            })
                                            setNewcart(_cart)


                                        }}


                                    >-</button> 
                                        <button className="cartbtns">{cartitem.quantity}</button> 
                                        <button className="cartbtns"
                                            onClick={() => {
                                                const _cart = newcart.map((item, index) => {
                                                    return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                                })
                                                setNewcart(_cart)


                                            }}
                                        >+</button>
                                        </div>
                                    

                                    <span> Rs.{cartitem.price * cartitem.quantity}</span>
                                    {/* <button className='rmbtn'>Remove</button> */}

                                    </div>     
                        );

                    })

                }
           


            <hr style={{ marginTop: "20px" ,borderColor:"skyblue" }} />

            <h2 style={{ color: "blue",marginBottom:"50px" }}> Total Price: Rs <span></span>
                {
                    newcart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)


                }
            </h2>
        </div>

    );

}
export default Cart;