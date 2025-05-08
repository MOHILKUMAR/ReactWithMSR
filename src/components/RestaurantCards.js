import { CDN_URL } from "../utils/constant";

const RestaurantCards  = (props) => {
 
    // const {name, cuisines,costForTwo,avgRating } = reslist[0]?.info
   
  const   {resData} = props; // destructure the props
  const  {
    name, cuisines,costForTwo,avgRating } = resData?.info; // destructure the  props value.
  
    return(
        <div className=" res-card">
        <img className ="res-logo"src={CDN_URL} alt=""></img>
         {/* <h1>{resData.name}</h1>
         <h3>{resData.cuisines}</h3>
         <h3>{resData.costForTwo}</h3>
         <h3>{resData.avgRating}</h3> */}

         <h1>{name}</h1>
         <h3>{cuisines.join(" , ") }</h3>
         <h3>{costForTwo}</h3>
         <h3>{avgRating}</h3>


       </div>
    )

}


export default RestaurantCards; 