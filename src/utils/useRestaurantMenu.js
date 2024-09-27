import {useState,useEffect} from "react";
import { MENU_API } from "./constants";
import resData from "../restaurrantData.json";
const useRestautrantMenu=(resId)=>{
  const [resInfo,setResInfo]=useState(null);
     useEffect(()=>{
        fetchMenu()
    },[ ])
    const fetchMenu=async()=>{
       // const data=await fetch(MENU_API+resId);
        const json=resData;
        setResInfo(json.cards)
    }
    
    return resInfo;
}
export default useRestautrantMenu;