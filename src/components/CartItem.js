import { useSelector } from "react-redux";
import CartMenu from "./CartMenu";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);
    return (
        <div className="text-center m-4">
          <h1 className="text-lg">Cart</h1> 
          <div>
            <CartMenu items={cartItems} />
            {/* {console.log("Hello")}
            {console.log(cartItems)} */}
          </div>
        </div>
    )
    
}
export default Cart;