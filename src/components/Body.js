// import reslist from "../utils/Data.js"
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from '../utils/useOnlineStatus'

const Body = () => {
  
    const [listofResturants, setlistofResturant ] = useState([])
    const [filterListofResturants, setFilterListofResturant ] = useState([])
    const [searchText, setsearchText] = useState("")
    const status = useOnlineStatus();


    // API CALL 
     useEffect( () =>{
        fetchData();
     }, []);

    const fetchData = async () => {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.141169197801197&lng=78.04667986929417&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")  
     
     const json = await data.json();
    //  console.log(json)
    
    setlistofResturant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterListofResturant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )

    }

  
    if(status === false)
        return (    
            <h1> LOOks your internet is offline </h1>
        );
  
     // Use the ShimmerUI  with Ternary Operator

    return listofResturants.length === 0 ? (<Shimmer />) : (
     <div className="Body">
     <div className="search">
        <input type="text" className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
            console.log(searchText);
          }}
        />
        <button 
         onClick={
            () => {
                const filterRestaurant = listofResturants.filter(
                    (res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                setFilterListofResturant(filterRestaurant);
            }
         }
        >
            search
        </button>
     </div>

     <button
     onClick={() => {
         const filter = listofResturants.filter(
            (restaurant) => restaurant?.info?.avgRating > 4.5 );
            setFilterListofResturant(filter);
     }}
     >
     Top-Rated-Restaurant
     </button>
     <div className="res-container">
      {/* < RestaurantCards resData = {reslist[0]?.info}/>
      < RestaurantCards resData = {reslist[1]?.info}/>
      < RestaurantCards resData = {reslist[2]?.info}/>
      < RestaurantCards resData = {reslist[3]?.info}/>
      < RestaurantCards resData = {reslist[4]?.info}/> */}
 
    {/* < RestaurantCards resData = {reslist[4]?.info}/>  */}
     
      {
         filterListofResturants.map( (restaurant) => (
             <Link key={restaurant.info.id} to = {"/restaurants/"+restaurant.info.id}><RestaurantCards resData = {restaurant} /></Link>
         
             
 
         )) 
      }
 
     </div>
     </div>
    )
 }


 export default Body;