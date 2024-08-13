import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu=()=>{
    useEffect(()=>{
      fetchMenu()
    },[])
    const[resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    console.log(resId);
    const fetchMenu=async()=>{
       const data= await fetch (MENU_API+resId) ; 
       console.log(data);
       const json= await data.json();
       console.log(json);
       setResInfo(json.data)
    };
    if(resInfo===null){
        return <Shimmer/>
    }
    //  const {name,cuisines,avgRating,costForTwoMessage,sla}=resInfo?.cards[2]?.card?.card?.info
    const { 
        name = '', 
        cuisines = [], 
        avgRating = 0, 
        costForTwoMessage = '', 
        sla={}
      } = resInfo?.cards?.[2]?.card?.card?.info || {};
    console.log(resInfo?.cards[2]?.card?.card?.info);
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card||{};
    console.log(itemCards);
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")}</p>
            <p>{costForTwoMessage}</p>
            <p>{avgRating}{" " }stars</p>
            <p>{sla.deliveryTime}{" " }mins</p>
            <h2>MENU</h2>
            <ul>
              {itemCards&&itemCards.map((item)=>(
              <li key={item.card.info.id}>
                {item.card.info.name}-Rs.{item.card.info.price/100}</li>))} 
            </ul>

        </div>
    )
}
export default RestaurantMenu;