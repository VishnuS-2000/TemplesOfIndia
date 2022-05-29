import { useEffect ,useState,useRef} from "react"

import { Link } from "react-router-dom"

import { Card } from "./Card"

import data from "../Assets/data.json"

import dotNormal from "../Assets/Mobile/dot-normal.png"
import dotExpanded from "../Assets/Mobile/dot-expanded.png"


/*Home Component*/


export const Home =()=>{

    const {recentlyAddedTemples,mostVisitedTemples,featuredTemples}=data

    const [active,setActive]=useState(0)

    const refContainer=useRef()

    useEffect(()=>{
        
        //change slides

        const changeSlide=()=>{
            const totalWidth=refContainer.current.scrollWidth-refContainer.current.clientWidth
            const progress=(100-(100/active))/100

            const position=progress*totalWidth

            

  
            
        }

        setTimeout(()=>{
            changeSlide()
        },1000)

    })

    const handleScroll=((e)=>{

        const position=refContainer.current.scrollLeft
        const totalWidth=refContainer.current.scrollWidth-refContainer.current.clientWidth

        const progress=100-Math.floor((position/totalWidth)*100)

        const index=Math.ceil(100/progress)

        if(index<featuredTemples.temples.length){
            setActive(index-1)
                
        }
        else{
            setActive(featuredTemples.temples.length-1)
        }

        console.log(progress)
    })

    return <div className="w-full flex flex-col  space-y-3">



    <div className="w-full bg-white h-[90px] p-4 font-poppins text-3xl ">
        <h1 className="font-bold text-primary">Home</h1>

    </div>
        <div className="w-full flex overflow-x-auto space-x-5" ref={refContainer} onScroll={handleScroll}>
        

        {featuredTemples.temples.map((element,index)=>{
            const imageId=featuredTemples.imageLocations[element.featured_image]
            return <Link key={index} to={`/detail/${element.id}`} className="lg:ml-12"><img src={`https://templesofindia.org/assets/compressed/${imageId}`} className="min-w-[350px] h-[375px] rounded-xl cursor-pointer"/></Link>

        })}
      
    
   

        </div>

        <div className="flex space-x-1 self-center">
            {featuredTemples.temples.map((element,index)=>{

                return <img key={index} src={active==index?dotExpanded:dotNormal}/>

            })}
        </div>


        

    <div className="flex flex-col justify-start p-4 space-y-4 lg:px-24">  
        <h1 className="text-3xl text-primary font-extrabold ">Latest Temples</h1>
        <div className="flex justify-start overflow-x-auto px-2  min-h-[380px] space-x-5">

            {recentlyAddedTemples.temples.map((element,index)=>{


                return <Card key={index} id={element.id} name={element.title} location={`${element.locality},${element.state}`} imageId={recentlyAddedTemples.imageLocations[element.featured_image]}>
                
                </Card>


            })}
        
        </div>




    </div>



    <div className="flex flex-col justify-start p-4 space-y-4 lg:px-24">  
    <h1 className="text-3xl text-primary font-extrabold ">Famous NearBy</h1>
    <div className="flex justify-start overflow-x-auto px-2   space-x-5 min-h-[320px]">

        {mostVisitedTemples.temples.map((element,index)=>{
      
            return <Card key={index} id={element.id} name={element.title} location={`${element.locality},${element.state}`} imageId={mostVisitedTemples.imageLocations[element.featured_image]}>

            </Card>


        })}
    
    </div>




</div>









    <div className="">
    
    </div>



    
    </div>
}