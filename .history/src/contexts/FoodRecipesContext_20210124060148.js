import React, { createContext, useState, useEffect } from 'react';

export const FoodRecipesContext = createContext();

const FoodRecipesContextProvider = (props) => {

	const RecipeApi = '/data.json';
    const [recipes , setRecipes ] = useState([]);

    useEffect(() => {
        getRecipes();
    });
    const getRecipes = () => {
        fetch(RecipeApi)
        .then(res => res.json())
        .then(res => console.log(res))
        .then(data => {
          setRecipes(data.recipes);
          console.log(data.recipes);
        } )
    }


  return (
    <FoodRecipesContext.Provider value={{ recipes }} >
    	{ props.children}
    </FoodRecipesContext.Provider>
  );
}

export default FoodRecipesContextProvider;