import {LOGO_URL} from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
  const [btnName,setBtnName]=useState("Login");
  const {loggedInUser}=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items);
    return(
      <div>
        <div className="flex justify-between"> 
         <div className="">
           <img className="w-24" src={LOGO_URL}alt="logo"/>
            </div> 
            <div className="flex justify-between m-2 py-4 text-lg text-white"> 
             <p className="mx-3 font-normal text-xl border-2 px-3 py-2 bg-blue-700 rounded-lg"><Link to="/">Home</Link></p>
             {/* <p className="mx-3 font-bold text-xl"><Link to="/about">About Us</Link></p>
             <p className="mx-3 font-bold text-xl"><Link to="/contact">Contact us</Link></p> */}
             <p className="mx-3 font-medium text-xl border-2 px-3 py-2 bg-yellow-500 rounded-lg"><Link to="/cart">Cart({cartItems.length})</Link></p>
             {/* <p className="mx-3 font-bold text-xl">{loggedInUser}</p> */}
             {/* <button className="mx-3 font-bold" onClick={()=>{
              btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
             }}>{btnName}</button> */}
            </div>
        </div>
        <hr />
      </div>  
    )
}
export default Header;