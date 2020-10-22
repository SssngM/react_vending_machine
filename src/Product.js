import React from 'react'; 
import { Link, useParams } from "react-router-dom";

import OrderForm from './OrderForm';
import "./App.css";

function Product({ cart, setCart, dataObj }) {
  const { type } = useParams();
  const products = dataObj[type]; // array of product objects

  return(
    <div className="imges">
      {products && products.map (product => (
        <div key={product.id}> 
          <div> 
            <img alt={product.name} src={product.src} /> 
          </div>
          {/* <div> 
            <Link to={`/product/${product.name}`}>{product.name}</ Link>
          </div> */}
          <h3> {product.name}</h3>
          <h3>price : {product.price}</h3>
          <h3>
            <OrderForm 
                type={type} 
                product={product} 
                setCart={setCart} />
          </h3>
          
        </div>
      ))}
      {!products && <h1>404</h1>}
    </div>
  )
}


export default Product; 
