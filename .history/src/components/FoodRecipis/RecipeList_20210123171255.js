import React, { useState, useEffect, useContext} from 'react';
import { FoodRecipesContext } from './../../contexts/FoodRecipesContext';

const RecipeList = () => {
	const { recipes } = useContext(FoodRecipesContext);
	const listRecipes = recipes.map(recipe => )
  return (
    <div>
      Dashboard
    </div>
  )
}

export default RecipeList;
