import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
  const [btnName,setBtnName]=useState("Login");
    return(
      <div>
        <div className="navbar "> 
         <div className="logo">
           <img src={LOGO_URL}alt="logo"/>
            </div> 
            <div className="nav-items"> 
             <p><Link to="/">Home</Link></p>
             <p><Link to="/about">About Us</Link></p>
             <p><Link to="/contact">Contact us</Link></p>
             <p>Cart</p>
             <button className="login" onClick={()=>{
              btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
             }}>{btnName}</button>
            </div>
        </div>
        <hr />
      </div>  
    )
}
export default Header;