import { useDispatch, useSelector } from "react-redux";
import CartMenu from "./CartMenu";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);
    const dispatch=useDispatch()
    function handleClearCart(){
      dispatch(clearCart());
      
    }
    return (
        <div className="text-center m-4">
          <h1 className="text-2xl font-semibold text-black">Cart</h1> 
          <button className="text-normal bg-blue-500 text-white rounded-md border-none px-2 py-2 m-4 "
          onClick={handleClearCart} >
            Clear Cart</button>
          <div>
           {cartItems.length===0&& <h1 className="font-semibold text-red-400 text-xl">Nothing in Cart.Add Some Items to the Cart!</h1>}
            <CartMenu items={cartItems} />
          </div>
        </div>
    )
    
}
export default Cart;