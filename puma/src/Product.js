import React, { useState, useEffect } from "react"
import "./Product.css"
function Product({Addtocart}) {
  // const [count, setCount] = useState(0)
  const [load, setLoad] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLoad(result);
      }

      );
  }, []);
  // function Addcount() {
  //   setCount(count + 1);
  // }
  function handlelowtohigh() {
    let filteritem = [...load].sort((a, b) => {
      return a.price - b.price;
    })
    setLoad(filteritem);
  }
  function handlehightolow() {
    let filteritem = [...load].sort((a, b) => b.price - a.price)

    setLoad(filteritem);
  }


  return (
    <>
      {/* <h1>Fetching Api</h1> */}
      <div className="productbtn">
        <select className="slt" onChange={(e) => {
          let selectedElm = e.target.value;
          if (selectedElm === "lowtohigh") {

            handlelowtohigh();

          }
          else if (selectedElm === "hightolow") {
            handlehightolow();

          }
        }
        }
        >
          <option>Filter</option>
          <option value="lowtohigh">Low To High</option>
          <option value="hightolow">High To Low</option>

        </select>

     
      {/* <span>Count : {count}</span> */}
      </div>
      <div className="list">
        {
          load.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image} alt="loading...." />
              <p>{p.title}</p>
              <p>{p.price}</p>


              <button onClick={()=>Addtocart(p)}>Add To Cart</button>
            </div>

          ))
        }
      </div>
    </>
  );
}
export default Product;