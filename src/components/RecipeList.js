import React, { useEffect} from 'react'
import Globals, { baseApi } from "./Globals"

export const RecipeList = () => {
    useEffect(() => {
        fetch(baseApi)
        .then(resp => resp.json())
        .then(data => console.log(data))
      }, [])
  return (
    <div>
        <div>RecipeList</div>
        <div>Dropdown</div>
    </div>
  )
}

export default RecipeList;