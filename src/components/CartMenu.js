import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const CartMenu = ({ items}) => {
  console.log(items);
      const dispatch=useDispatch();
      const handleRemoveItem=(item)=>{
       dispatch(removeItem(item));
      }

  return(
   <div>
     {items && items.map(item=>( 
        <div key={item?.card?.info?.id}
           className= "p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
          <div className="font-medium w-8/12 ">
               <p>{item?.card?.info?.name}</p>
               <p>₹{item?.card?.info?.price/100}</p>
               <p className="text-sm font-light">{item?.card?.info?.description}</p>
          </div>
          < div>
               <div className="absolute text-center"> 
                 <button 
                 className="bg-white shadow-md rounded px-2 py-1  text-green-800  mt-24 ml-14"
                  onClick={()=>handleRemoveItem(item)}>
                    Remove +</button>
             </div>
             <img className="w-[180px] h-[120px] rounded-lg mb-3 " src={CDN_URL+item?.card?.info?.imageId}/>
         </div>
      </div>    
      ))}
   </div>
  );
  }
export default CartMenu;