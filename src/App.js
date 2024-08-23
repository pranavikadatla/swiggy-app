import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error   from "./components/Error";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import React, {lazy,Suspense,useState,useEffect, useContext} from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/CartItem";

const About=lazy(()=>import ("./components/About"));

const AppLayout=()=>{
    const [userName,setUserName]=useState();
    // const {loggedInUser}=useContext(UserContext);
    useEffect(()=>{
        const data={
            name:"pranu",
        }
        setUserName(data.name);
    },[])
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return <h1>You are Offline! Check Your Internet Connection Once...</h1>
    }


    return(
        <Provider store={appStore }>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
           <Header/>
           <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/> ,
            },
            {
                path:"/about",
                element:( <Suspense fallback={<Shimmer/>}><About/></Suspense>),
            },
            {
                path:"/contact",
                element:<Contact/> ,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/> ,
            },
            {
                path:"/cart",
                element:<Cart/> ,
            },
           
        ],
        errorElement:<Error/>
    },
   
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)