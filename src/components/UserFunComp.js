import { useState } from "react";
const UserFunComp=(props)=>{
const {name,location}=props;
const [count,setCount]=useState(0);
const [count2]=useState(0);
    return (
        <div className="user-card">
            <h3>Count={count}</h3>
            <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
            <h3>Count2={count2}</h3>
            <h3>Name:{name}</h3>
            <h4>Location:{location}</h4>
        </div>
    )
}
export default UserFunComp;