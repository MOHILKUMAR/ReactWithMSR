
import { useEffect, useState } from "react";


const useOnlineStatus = () => {
 
    const [status, setStatus] = useState(true);
    
  useEffect(() => {
    addEventListener("offline", (event) => { 
        setStatus(false)
    })

    addEventListener("online", (event) => { 
        setStatus(true)
    })
  } , [])

  return status;
   
}

export default useOnlineStatus;

