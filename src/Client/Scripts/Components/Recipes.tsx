import * as React from 'react';
import {Link} from 'react-router-dom';
import Constant from '../Constants';
import RecipeCard from './RecipeCard';

import Grid from '@material-ui/core/Grid';

const Recipes: React.FC<{}> = () => {
   const {recipes} = Constant;

   return (
      <div className="Browse-Wrapper">
         <div className="form-wrapper">
            <form>
               <div className="filter-fields">
                  <div className="field">
                     <div className="dropdown-field">
                        <select name="filter-type" id="select-time">
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
                        <select name="filter-time" id="select-time">
                           <option value="any-time">Select Time</option>
                           <option value="10">Less than 10 Minutes</option>
                           <option value="20">Less than 20 Minutes</option>
                           <option value="30">Less than 30 Minutes</option>
                           <option value="60">Less than 1 Hour</option>
                        </select>
                     </div>
                  </div>
                  <div className="field input">
                     <input type="text" placeholder="Search by Ingredient"/>
                  </div>
                  <div className="field">
                     <input type="submit" value="Submit" />
                  </div>
               </div>
            </form>
         </div>
         <div className="search-results">
            <Grid className="recipecard-grid-row" container spacing={0} style={{justifyContent: 'center'}}>
               {recipes.map((recipe, idx) =>(
                <Grid key={idx} item sm={7} md={6} className="recipecard-grid-col">
                   <Link to={`/recipe/${recipe.recipeId}`} key={idx}>
                     <RecipeCard
                        name={recipe.name}
                        imgLink={recipe.imgLink}
                        time={recipe.time}
                        unit={recipe.unit}
                        ingredients={recipe.ingredients}
                        steps={recipe.steps}
                     />
                  </Link>
                </Grid>
            ))}
            </Grid>
          </div>
      </div>
   );
}

export default React.memo(Recipes);