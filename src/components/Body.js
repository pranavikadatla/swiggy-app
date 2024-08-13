import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body=()=>{
  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  const[filterRestaurants,setFilterRestaurants]=useState([]);
  const [search,setSearch]=useState("")
  useEffect(()=>{
    fetchData();
  },[])
  async function fetchData(){
    const data =await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.537122&lng=73.6771662&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    console.log(json); 
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
  }
  
    return listOfRestaurants.length===0 ? <Shimmer/> : (
      <div className="">
           <input className="input"type="text" value={search}
            onChange={(e)=>{
              setSearch(e.target.value)
              console.log(search);
            }}
        />
           <button className="search" onClick={()=>{
            const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()));
            setFilterRestaurants(filteredRestaurants);
           }}>Search</button>
           <button className="filter-cards" onClick={()=>{
           const filterList=listOfRestaurants.filter((res)=>res.info.avgRating>4.2);
           setListOfRestaurants(filterList);
           }}>Top Rated Restaurants</button>
          <div className="restcards-container">
            {filterRestaurants.map((restaurant)=>(
              <Link key={restaurant.info.id}
                 to={"/restaurant/"+ restaurant.info.id}> 
                     <RestaurantCard  resData={restaurant}/></Link>
            ))}
           
          </div>
        </div>
    )
}
export default Body;