//import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    // const [data,setData] =useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshChoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()
    return(
        <div className="text-center m-4   
        p-4 text-3l
    " >Github followers :{data.followers}
       
         <img  src={data.avatar_url} alt="Git picture" width={300} className="block ml-auto mr-auto" />
     
         </div>


        )
}

export default GitHub

export const githubInfo = async()=>{
   const response =  await fetch('https://api.github.com/users/hiteshChoudhary')
   return response.json()
}