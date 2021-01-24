import React, { createContext, useState, useEffect } from 'react';

export const FoodRecipesContext = createContext();

const FoodRecipesContextProvider = (props) => {

	const RecipeApi = '/data.json';
    const [recipes , setRecipes] = useState([]);

    useEffect(() => {
      let timer = setTimeout(() => {
        fetch(RecipeApi)
        .then(res => {
          if(res.ok) {
            return res;
          }
          throw Error(res.status);
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => {
          setRecipes(data);
          clearTimeout(timer);
        })
        .catch(error => console.log(`The problem is with: ${error}`));

      }, 500);
    },[]);

  return (
    <FoodRecipesContext.Provider value={{ recipes }} >
    	{ props.children}
    </FoodRecipesContext.Provider>
  );
}

export default FoodRecipesContextProvider;