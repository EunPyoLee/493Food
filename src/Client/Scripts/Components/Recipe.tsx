import * as React from 'react';
import {Link} from 'react-router-dom';
import {RouteComponentProps} from 'react-router-dom';

import Constant from '../Constants';

interface RouteParams{
   recipeId: string;
}

const Recipe: React.FC<RouteComponentProps<RouteParams>> = (props:RouteComponentProps<RouteParams>) => {
   const {home, recipes} = Constant.routes;
   const recipeId = parseInt(props.match.params.recipeId);
   const recipe = Constant.recipes[recipeId];
   return (
      <div className="Recipe-Wrapper">
          <Link to={home}>
           <div className="home-button">
              Home
            </div>
         </Link>
         <Link to={recipes}>
           <div className="home-button">
              Recipes  
            </div>
         </Link>
      
         <div className="recipe-card">
            <img className="recipe-photo" src={`${recipe.imgLink}`} alt={`${recipe.name}`}/>
            <h2 className="recipe-title">
               {recipe.name}
            </h2>
            <p className="prep-time">{recipe.time} {recipe.unit}</p>
            <div className="recipe-ingredients">
               <ul>
               {(recipe.ingredients).map((ingredient, idx) => (
                  <li key={idx}>
                     <span className="ingredient">{ingredient.ingredientName}</span>
                     <span className="quantity-ingredient"> : {ingredient.quantity}</span>
                  </li>
               ))}
               </ul>
            </div>
            <div className="recipe-steps">
               <ol>
               {(recipe.steps).map((step, idx) => (
                  <li key={idx}>{step}</li>
               ))}
               </ol>
            </div>
         </div>
      </div>
    );
}

export default React.memo(Recipe);
