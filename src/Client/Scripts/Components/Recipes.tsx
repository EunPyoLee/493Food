import * as React from 'react';
import {Link} from 'react-router-dom';
import Constant from '../Constants';
import recipe_dict from '../RecipeDict'
import RecipeCard from './RecipeCard';
import {IRecipeData, Ingredient} from '../Models/IRecipeData';

import Grid from '@material-ui/core/Grid';
import { Url } from 'url';
import { FormControl, Select } from '@material-ui/core';
import { time } from 'console';

const Recipes: React.FC<{}> = () => {
   const recipes = recipe_dict;
   let showing_recipes = recipe_dict;
   let timeFilter = 200;
   let typeFilter = "";

const filterRecipes = () => {
   return (event: React.MouseEvent) => {
      showing_recipes = showing_recipes.filter((p) => p.time < timeFilter && (typeFilter == "" || p.recipeType === typeFilter))
   }
};

const renderRecipes = (recipes: ReadonlyArray<IRecipeData>): ReadonlyArray<React.ReactNode> => {
   return recipes.map((recipe, idx) => (
      <Grid key={idx} item sm={7} md={6} className="recipecard-grid-col">
         <Link to={`/recipe/${recipe.recipeId}`} key={idx}>
            <RecipeCard
               recipeId={recipe.recipeId}
               name={recipe.name}
               imgLink={recipe.imgLink}
               recipeType={recipe.recipeType}
               time={recipe.time}
               unit={recipe.unit}
               ingredients={recipe.ingredients}
               steps={recipe.steps}
            />
         </Link>
      </Grid>
   ))
};

   return (
      <div className="Browse-Wrapper">
         <div className="form-wrapper">
            <form>
               <div className="filter-fields">
                  <div className="field">
                     <div className="dropdown-field">
                        <input type="select" name="filter-type" id="select-time" value={typeFilter}>
                           <option value="any-type">Select Type</option>
                           <option value="chicken">Chicken</option>
                           <option value="beef">Beef</option>
                           <option value="vegetarian">Vegetarian</option>
                           <option value="desserts">Desserts</option>
                        </input>
                     </div>
                  </div>
                  <div className="field">
                     <div className="dropdown-field">
                        <select name="filter-time" id="select-time" value={timeFilter}>
                           <option value="any-time">Select Time</option>
                           <option value={10}>Less than 10 Minutes</option>
                           <option value={20}>Less than 20 Minutes</option>
                           <option value={30}>Less than 30 Minutes</option>
                           <option value={60}>Less than 1 Hour</option>
                        </select>
                     </div>
                  </div>
                  <div className="field">
                     <button type="submit" className="button" onClick={filterRecipes}>Submit</button>
                  </div>
               </div>
            </form>
         </div>
         <div className="search-results">
            <Grid className="recipecard-grid-row" container spacing={0} style={{justifyContent: 'center'}}>
               {renderRecipes(showing_recipes)}
            </Grid>
          </div>
      </div>
   );
}

export default React.memo(Recipes);