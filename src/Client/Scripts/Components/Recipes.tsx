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
import { setConstantValue } from 'typescript';

const Recipes: React.FC<{}> = () => {
   const recipes = recipe_dict;
   let showing_recipes = recipe_dict;
   let timeFilter = 200;
   let typeFilter = "";

const filterRecipes = () => {
   return (event: React.MouseEvent) => {
      console.log(showing_recipes);
      showing_recipes = showing_recipes.filter((p) => p.time < timeFilter && (typeFilter === "" || p.recipeType === typeFilter))
      console.log(showing_recipes);
   }
};

const handleSubmit = (e: React.SyntheticEvent) => {
   const target = e.target as typeof e.target & {
      filtertype: { value: string };
      filtertime: { value: number };
    };
    timeFilter = target.filtertime.value;
    typeFilter = target.filtertype.value;
    filterRecipes();
};

const renderRecipes = (recipesin: ReadonlyArray<IRecipeData>): ReadonlyArray<React.ReactNode> => {
   return recipesin.map((recipe, idx) => (
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
                        <select name="filtertype" id="select-type" defaultValue={typeFilter} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {(typeFilter = e.target.value);}}>
                           <option value="any-type">Select Type</option>
                           <option value="chicken">Chicken</option>
                           <option value="beef">Beef</option>
                           <option value="vegetarian">Vegetarian</option>
                           <option value="desserts">Desserts</option>
                        </select>
                     </div>
                  </div>
                  <div className="field">
                     <div className="dropdown-field">
                        <label>Please input a maximum number of minutes</label>
                        <input name="filtertime" type="number" defaultValue={timeFilter} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {(timeFilter = parseInt(e.target.value));}}/>
                     </div>
                  </div>
                  <div className="field">
                     <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
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
