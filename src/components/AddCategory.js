import { useState } from "react"

// Recibimos como argumento setCategories

const AddCategory = ({onNewCategory}) =>{

    const [input, setInput] =useState('');
 
    const onInputChange = ({target}) =>{
        setInput (target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()

        //si el input tiene mas de un caracter retornamos
        if (input.trim().length <= 1) return;

       onNewCategory( input.trim())
        setInput('');
    }
 
    return (
     <form onSubmit={ onSubmit}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={input}
            onChange={ onInputChange}
        />

    </form>
        
    )
    }

    export default AddCategory