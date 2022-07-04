import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.jpg";

const options = {
  burgerColorHover: "red",
  logo,
  
  logoWidth: "10vmax",
  navColor1: "white",
  navColor4:"white",
  logoHoverSize: "10px",
  logoHoverColor: "red",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "black",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  nav4FlexDirection:"row",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  href:"#home",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "2vmax",
  searchIconSize:"2vmax",
  cartIconSize:"2vmax",
  profileIconSize:"2vmax"
};

const Header = () => {
  return(
    <ReactNavbar {...options} />
    
    );
};

export default Header;
