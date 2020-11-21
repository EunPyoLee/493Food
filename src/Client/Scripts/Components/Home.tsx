import * as React from 'react';
import {Link} from 'react-router-dom';

import Constant from '../Constants';

const Home: React.FC<{}> = () => {
  const {recipes} = Constant;
  const randRecipe = recipes[Math.floor(Math.random() * recipes.length)];

   return (
      <div className="home-wrapper">
         <h1>Welcome to 493Food!</h1>
          <div className="top-row">
            <Link to="/Recipes">
              <div className="home-item" id="browse-link">
                Browse Recipes
              </div>
            </Link>
            <Link to="/NewRecipe">
              <div className="home-item" id="newRecipe-link">
                Upload a Recipe
              </div>
            </Link>
          </div>
          <div className="bottom-row">
            <Link to={`/recipe/${randRecipe.recipeId}`}>
              <div className="home-item" id="random-link">
                Get Random Recipe
              </div>
            </Link>
            <Link to="/Groceries">
              <div className="home-item" id="random-link">
                My Grocery List
              </div>
            </Link>
         </div>
      </div>
    );
}

export default React.memo(Home);
