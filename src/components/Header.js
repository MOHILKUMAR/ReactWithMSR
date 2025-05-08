import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
    
 const [btn, setBtn] = useState("Login");
 const stauts = useOnlineStatus();
    return (
        <div className="header">
         <div className="logo ">
            <img className="logo" src="#" alt=""></img>
         </div>
         <div className="nav-items">
          <ul>
          <li>Status:{stauts?"online":"offline"}</li>
            <li><Link to= "/">Home</Link></li>
            <li><Link to = "/about">About Us</Link></li>
            <li><Link to = "/contact">Contact Us</Link></li>
            <li><Link to = "/grocery">Grocery</Link></li>
            <li>Cart</li>
             <li>
              <button onClick={() =>
              {btn === "Login" ? 
              setBtn("Logout"): 
              setBtn("Login")
              }}>
               {btn}
              </button>
             </li>
            
          </ul>
         </div>
        </div>
    )
}


export default Header;