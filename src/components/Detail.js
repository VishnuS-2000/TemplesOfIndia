import { Link,useParams,Navigate } from "react-router-dom"
import data from "../Assets/data.json"
import { useEffect } from 'react';
import { useState } from 'react';

import locationIcon from "../Assets/Mobile/location-icon.png"

export const Detail=()=>{


   const {mostVisitedTemples,recentlyAddedTemples,featuredTemples}=data

   const [templeDetail,setTempleDetail]=useState({})

    const [error,setError]=useState(false)

   const templeData=[...mostVisitedTemples.temples,...recentlyAddedTemples.temples,...featuredTemples.temples]
   const imageData={...mostVisitedTemples.imageLocations,...recentlyAddedTemples.imageLocations,...featuredTemples.imageLocations}
    const arrow='<'

    

    const {id}=useParams()



    useEffect(()=>{
        
        /*search temple based on id*/

        const data=templeData.filter((element)=>{
            
            return element.id==id
        })

            if(data.length>0){

                setTempleDetail(data[0])
            }
            
            else{
                setError(true)
            }
          
       
        

    })

    return <>
    
    {error&&<Navigate to="/error"/>}
    {templeDetail?<div className="w-full flex flex-col  space-y-3">


    <div className="w-full bg-white h-[90px] p-4 font-poppins text-3xl ">
        <Link to="/">
        <h1 className="font-bold text-primary cursor-pointer"> {arrow} Detail</h1>
        </Link>
    </div>

    <div className="w-full flex flex-col  items-center space-y-5  px-10 lg:items-start lg:max-w-[60%]" >

    <div>
    <img src={`https://templesofindia.org/assets/compressed/${imageData[templeDetail.featured_image]}`} className="rounded-3xl max-h-[350px] lg:max-h-[650px]"/>
    </div>

    <div className="space-y-3">
        <h1 className="font-bold text-primary text-3xl ">{templeDetail.title}</h1>
        <div className="flex space-x-3 items-center">
        <img src={locationIcon} className="w-[17px] h-[17px]"/>
        <p className="text-base text-secondary">{`${templeDetail.locality},${templeDetail.state}`}</p>
        </div>
    </div>

    </div>
    

    
    </div>:<div><h1 className="text-xl font-bold text-primary">Loading...</h1></div>}</>



}