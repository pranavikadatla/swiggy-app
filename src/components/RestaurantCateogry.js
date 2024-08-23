
import ItemList from "./ItemList";

const RestaurantCateogry=({data,showItems,setShowIndex})=>{
    // console.log(data.itemCards);
    // console.log(data.categories)
    function handleClick(){
        console.log("clicked");
        // setShowItems(!showItems);
        setShowIndex(); 
    }
    const dataList=data?.itemCards? (data?.itemCards): (data?.categories[0].itemCards);
    return(
        <div className="w-8/12 mx-auto my-4 bg-gray-50 p-2 shadow-md">
            <div className=" flex justify-between  " onClick={handleClick}>
                <span className="font-bold text-lg ">
                  {data.title}
                 ({data.itemCards&& data.itemCards.length||data.categories&& data.categories.length})
                  </span>
                <span className="cursor-pointer" >   
                   <img className="w-8 mt-1"src="https://www.pngitem.com/pimgs/m/10-101221_down-arrow-png-image-background-down-arrow-icon.png"/>
                  </span>
           </div>
    
         { showItems&&<ItemList data={data}/>}
        </div>
    )
}
export default RestaurantCateogry;