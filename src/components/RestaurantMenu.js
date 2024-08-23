import useRestautrantMenu from "../utils/useRestaurantMenu";
import RestaurantCateogry from "./RestaurantCateogry";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
const RestaurantMenu=()=>{
   const {resId}=useParams();
   const resInfo=useRestautrantMenu(resId);
   const[showIndex,setShowIndex]=useState(null);
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
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card||{};
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
    { const cardType=c.card?.card?.["@type"];
       if (cardType=== "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"||
             cardType=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
                return  cardType;
             }
    })
    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl my-3">{name}</h1>
            <p className="font-bold text-lg font-red">{cuisines.join(",")}</p>
            {/* <p>{costForTwoMessage}</p>
            <p> {avgRating}{" " }stars</p>
            <p>{sla.deliveryTime}{" " }mins</p> */}
            {categories.map((category,index)=> 
                 <RestaurantCateogry  key={category?.card?.card?.title}
                  data={category?.card?.card}
                  showItems={index===showIndex? true:false}
                  setShowIndex={()=>setShowIndex(index)}/>
                  )}
        </div> 
    )
}
export default RestaurantMenu;