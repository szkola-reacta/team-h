import React, { useState, useEffect, useContext} from 'react';
import { FoodRecipesContext } from './../../contexts/FoodRecipesContext';

const RecipeList = () => {
	const { recipes } = useContext(FoodRecipesContext);
	console.log(recipes);
	const listRecipes = recipes.map(item => <div key={item.id}>{item.name}</div>)
  return (
    <div>
			Lista
      {listRecipes}
    </div>
  )
}

export default RecipeList;
