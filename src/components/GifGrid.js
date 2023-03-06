import { getGifs } from "./helpers/getGifs"
import {useEffect, useState } from "react"

const GifGrid = ({category}) =>{


  const [images,setImages] =useState([])

     const getImages = async() =>{
      const newImages = await getGifs(category);
      setImages(newImages)
     }
      useEffect(()=>{
        getImages()

      }, [])




  return (
    <>
       <h3>{category}</h3>
      <ol>
       
      </ol>
      
    </>
  )
}

export default GifGrid