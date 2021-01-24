import React, { createContext, useState, useEffect } from 'react';

export const FoodRecipesContext = createContext();

const FoodRecipesContextProvider = (props) => {

	const RecipeApi = '/data.json';
    const [recipes , setRecipes] = useState([]);

    useEffect(() => {
      fetch(RecipeApi)
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => {
        setRecipes(res);
        console.log(res);
      } )
    },[]);


    console.log(recipes);

  return (
    <FoodRecipesContext.Provider value={{ recipes }} >
    	{ props.children}
    </FoodRecipesContext.Provider>
  );
}

export default FoodRecipesContextProvider;