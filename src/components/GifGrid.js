import {useEffect, useState } from "react"
import GifItem from "./GifItem"
import { useFetchGifs } from "./hooks/useFetchGifs"
const GifGrid = ({category}) =>{




  const {images, loading} = useFetchGifs (category);

  console.log({images,loading})
   



  return (
    <>
       <h3>{category}</h3>
     {
      loading && (<h2>Cargando...</h2>) 
     }
       <div className="card-grid">
       {
        images.map((image)=>(
        <GifItem key={image.id} 
        {...image}

        />
        ))
       }
       </div>
    </>
  )
}

export default GifGrid