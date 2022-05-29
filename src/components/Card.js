import cardImage from "../Assets/Mobile/card-image.png"
import locationIcon from "../Assets/Mobile/location-icon.png"

import { Link } from "react-router-dom"


/*Temple Display Card*/


export  const Card=({id,imageId,name,location})=>{



    return <div className="flex min-w-[220px] h-[120px] space-y-3 flex-col">
  
        <Link to={`/detail/${id}`}>
        <img src={`https://templesofindia.org/assets/compressed/${imageId}`} className="rounded-xl h-[200px] w-[200px] cursor-pointer"/>
        </Link>
        <p className="text-sm font-bold">{name}</p>
        <div className="flex justify-start items-center space-x-2">
            
        <img src={locationIcon}/>
        <p className="text-xs text-secondary">{location}</p>
        
        
        </div>

    </div>



}