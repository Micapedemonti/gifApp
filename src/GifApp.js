import { useState } from "react";

const GifApp = ()=> {

  const [categories, setCategories] = useState(['one punch','Dragon ball']);

  const onAddCategory = () =>{
   setCategories([...categories, 'valorant'])
  }

  return (
    <>
     
      {/* TITLE */}

      <h1> Gif App</h1>

      {/* INPUT */}

      {/* LISTADO DE GIFS */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
          {
            categories.map (category =>{
            return <li key={category}>{category}</li>
          })}

       
      </ol>
    </>
  );
}

export default GifApp;
