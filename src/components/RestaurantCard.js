import { CDN_URL } from "../utils/constants"
const RestaurantCard=(props)=>{
    const {resData}=props
    const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo}=resData?.info
    return(
        <div className="w-[300px] h-[400px] my-4 mx-2 p-2  bg-gray-200 rounded-md "> 
            <img className="w-[300px] h-[200px] p-1 rounded-lg"src={CDN_URL+cloudinaryImageId}/>
         <h3 className="m-2 my-0 font-bold">{name}</h3>
         <p className="m-2 font-normal">{cuisines.join(",")}</p>
         <p className="m-2 font-normal">{avgRating} stars</p>
         <p className="m-2 font-normal">{costForTwo}</p>
         <p className="m-2 font-normal">{sla?.deliveryTime} minutes</p>
        </div>
    )
}
export const promotedWithLabel=()=>{
    return ()=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard/>
            </div>
        )
    }
}
export default RestaurantCard;