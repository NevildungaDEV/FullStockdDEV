import React ,{Fragment,useEffect}from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./productsCard";
import MetaData from "../layout/metaData";
import {getProduct} from "../../actions/productAction"
import {useSelector,useDispatch} from "react-redux"



const product={
  name:"call of duty mw",
  image:[{url:"https://m.media-amazon.com/images/M/MV5BMTc3NWY2ZTMtNTNlZC00MWM2LWI5MzYtMmU1YzY0ODk5ZjQ1XkEyXkFqcGdeQXVyODA2MTkwODk@._V1_.jpg"}],
  price:"Rs 1200",
  _id:"shockwave",
};

const Home = () => {
  const dispatch =useDispatch();
  const {loading,error,products,productsCount}= useSelector(
    (state)=>state.products
  )
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  return (
    <Fragment>
    <MetaData title="All Gaming"/>
          <div title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to ALL GAMEING</p>
            <h1>FIND AMAZING GAMING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll {CgMouse}
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          
          <div className="container" id="container">
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          </div>
          
          </Fragment>
  )
    
};

export default Home;
