import React, { useState, useEffect } from "react"
import "./Product.css"
function Product({Addtocart}) {
  // const [count, setCount] = useState(0)
  const [search ,setSearch]=useState("");
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
    
      
      <div className="productbtn">

      <input    type="text"   placeholder="Search here..."  value={search}  onChange={(e)=>setSearch(e.target.value)}    style={{padding:10,width:250,backgroundColor:'lightgrey',border:"none",outline:"none", borderRadius:10,marginRight:20}}/>
        
        
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
          load.filter(product=>product.title.toLowerCase().includes(search)).map((p) => (
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