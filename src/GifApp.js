import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifApp = ()=> {

  const [categories, setCategories] = useState(['one punch']);

  const onAddCategory = (newCategory) =>{

    // si la categoria ya existe entonces no hara Nada , de lo contrario insertara la categoria
    if (categories.includes(newCategory) ) return;

   setCategories([newCategory,...categories])
  }

  return (
    <>
     
      <h1> Gif App</h1>

      {/* enviamos del elemento padre al elemento hijo un proptype setCategories */}
      <AddCategory 
      onNewCategory ={(event)=>onAddCategory(event)}/>

      {/* LISTADO DE GIFS */}

          {
            categories.map ( (category) => (
            <GifGrid key ={category} category ={category}/>
            ))
       }
    </>

  );
}

export default GifApp;
