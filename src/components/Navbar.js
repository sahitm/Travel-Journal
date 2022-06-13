import React from "react"
import logo from "../images/Path.jpg";
export default function Navbar(){
    return(
       <div className="navbar">
           <img src={logo} alt="logo"></img>
           <h3>my travel journal.</h3>
       </div> 
    )
}