import React from 'react'
import { NavLink } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const options={
    edit:false,
    color:"rgba(0,0,0, 0.1)",
    activeColor:'tomato',
    size:window.innerWidth<600 ? 20:25,
    value:2.5,
    isHalf:true,
    
}

const product = ({product}) => {
  return (
    <NavLink className="productCard" to={`/product/${product._id}`}>
    <img src={product.image[0].url} alt={product.name} />
    <p>{product.name}</p>
    <div>
    <ReactStars{...options}/><span>(256 reviews)</span>
    </div>
    <span>{product.price}</span>
      
    </NavLink>
  )
}

export default product
