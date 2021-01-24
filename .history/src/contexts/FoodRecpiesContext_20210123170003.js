import React, { createContext, useState, useEffect } from 'react';

export const FoodRecpiesContext = createContext();

const FoodRecpiesContextProvider = (props) => {

	const RecipeApi = '/data.json';
    const [recpipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    });
    const getRecipes = () => {
        fetch(RecipeApi)
        .then(res => res.json())
        .then(res => console.log(res))

    }


  return (
    <FoodRecpiesContext.Provider value={{ recpipes }} >
    	{ props.children}
    </FoodRecpiesContext.Provider>
  );
}

export default FoodRecpiesContextProvider;