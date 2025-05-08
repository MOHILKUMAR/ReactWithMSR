import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = ()  => {
    
    const {resId} = useParams();
    //  console.log(resId);
    const resInfo = useRestaurantMenu(resId);
//  const [resInfo, setResInfo] = useState(null);

 
//  useEffect(()=> {
//   fetchMenu();
//  },[]);

//  const fetchMenu = async () =>{
//     const data = await fetch(MENU_API+resId);
//     const json = await data.json();
//     console.log(json.data);
//     setResInfo(json.data);
//  }



 if(resInfo ===  null) return <Shimmer />


const {name , costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info; 
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
console.log(itemCards)





    return (
        <div> 
            <div>
                <h1>{name}</h1>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwoMessage}</h3>
            </div>
            <h1>Menu of Restaurants </h1>
              <ul>
                {/* {<li>{itemCards[0].card.info.name} -{"Rs"}
                     {itemCards[0].card.info.price / 100}
                </li>} */}

                {
                    itemCards.map((item)=>

                    <li key={item.card.info.id}>{item.card.info.name} -{"Rs"}
                     {item.card.info.price / 100 || item.card.info.defaultPrice /100}
                     </li>
                    )
                }
              </ul>
           
        </div>
    )
}


export default RestaurantMenu;











