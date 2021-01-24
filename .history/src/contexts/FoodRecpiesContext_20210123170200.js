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

    }


  return (
    <FoodRecipesContext.Provider value={{ recpipes }} >
    	{ props.children}
    </FoodRecipesContext.Provider>
  );
}

export default FoodRecipesContextProvider;