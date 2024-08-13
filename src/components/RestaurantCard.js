import { CDN_URL } from "../utils/constants"
const RestaurantCard=(props)=>{
    const {resData}=props
    const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo}=resData?.info
    return(
        <div className="restaurant-card">
            <img className="resto-img"src={CDN_URL+cloudinaryImageId} alt="biryani"/>
         <h3>{name}</h3>
         <p>{cuisines.join(",")}</p>
         <p>{avgRating} stars</p>
         <p>{costForTwo}</p>
         <p>{sla?.deliveryTime} minutes</p>
        </div>
    )
}
export default RestaurantCard;