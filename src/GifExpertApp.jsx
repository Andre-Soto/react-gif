import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export  const GifExpertApp = () =>  {

    const [categories, setcategories] = useState([])

    const onAddCategory = ( NewCategory ) => {

        if(categories.includes(NewCategory)) return;

        setcategories( [NewCategory, ...categories] )
    }

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory onNewCategory = {(event) => onAddCategory(event)} />
        {
            categories.map( (category) => (
                <GifGrid 
                    key={category} category={category} 
                />
            ))
        }
            
    </>
  )
}
