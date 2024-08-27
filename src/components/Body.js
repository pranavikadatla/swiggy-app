import RestaurantCard from "./RestaurantCard";
import {useEffect, useState,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
const Body=()=>{
  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  const[filterRestaurants,setFilterRestaurants]=useState([]);
  const [search,setSearch]=useState("")
  useEffect(()=>{
    fetchData();
  },[])
  async function fetchData(){
    const data =await fetch ("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.537122&lng=73.6771662&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    console.log(json);
    const dataItems=json?.data?.cards
    for(let i=0;i<dataItems?.length;i++){
      if(dataItems[i].card.card["@type"]==="type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"){
        setListOfRestaurants(dataItems[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(dataItems[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
    }
    // setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
  }
  const {loggedInUser,setUserName}=useContext(UserContext); 
    return listOfRestaurants?.length===0 ? <Shimmer/> : (
      <div className="mx-5 ">
        <div className="flex my-6 ">
             <div className="border-2 rounded-lg  w-[50%] flex">
               <input className="w-[100%] py-2 px-2 ml-2 rounded-lg "type="text" value={search} placeholder="Search"
                 onChange={(e)=>{
                 setSearch(e.target.value)
              }}/>
              <div className="" onClick={()=>{
                 const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()));
                 setFilterRestaurants(filteredRestaurants);
                  }}>
                 <img className=" w-[50] "src="https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=" />
             </div>
           </div>
           <button className=" mx-4 p-2 bg-green-700 text-white rounded-md" onClick={()=>{
                const filterList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5);
                  console.log("clicked");
                setFilterRestaurants(filterList);
           }}>Top Rated Restaurants</button>
           {/* <input className="border-black p-2"
           value={loggedInUser} 
        onChange={(e)=> {setUserName(e.target.value)}}
          />  */}
        </div>
         <div className="flex justify-between flex-wrap text-warp  break-words">
            { filterRestaurants&&filterRestaurants.map((restaurant)=>(
              <Link key={restaurant.info.id}
                 to={"/restaurant/"+ restaurant.info.id}> 
                     <RestaurantCard  resData={restaurant}/></Link>
            ))}
         </div>
      </div>
    )
}
export default Body;