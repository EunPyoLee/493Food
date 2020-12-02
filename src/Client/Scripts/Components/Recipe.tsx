import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';


import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import recipes from '../RecipeData';
import {Ingredient} from '../Models/IRecipeData';
import {IGroceryList, list} from '../Models/IGroceryList';
import {imgStyle, contentCardStyle, contentTextStyle} from '../../Styles/Components/StyleRecipe';
import NewRecipe from './NewRecipe';

interface RouteParams{
   recipeId: string;
}


const Recipe: React.FC<RouteComponentProps<RouteParams>> = (props:RouteComponentProps<RouteParams>) => {
   const recipeId = parseInt(props.match.params.recipeId);
   const recipe = recipes[recipeId];

   let handleSubmit = function (event:React.FormEvent): void {
      event.preventDefault();
      const newItems = recipe.ingredients;
      list.push.apply(list, newItems);
      console.log(list);
      alert("Ingredients added to list!");
    };

   const renderIngredientLines = (ingredients: ReadonlyArray<Ingredient>): ReadonlyArray<React.ReactNode> => {
      return ingredients.map((ingredient, idx) => (
         <li key={idx}>
            <span className="ingredient">{ingredient.ingredientName}</span>
            <span className="quantity-ingredient"> : {ingredient.quantity}</span>
         </li>
      ))
  };

  const renderStepLines = (steps: ReadonlyArray<string>): ReadonlyArray<React.ReactNode> => {
   return steps.map((step, idx) => (
      <li key={idx}>{step}</li>
   ))
};

   return (
      
      <div className="recipe-wrapper">
         <Grid className="home-grid-row" container spacing={0} style={{justifyContent: 'center'}}>
            <Grid item xs={12} md={6} className="home-grid-col">
               <CardMedia
                     image={recipe.imgLink}
                     style={imgStyle}
               />
            </Grid>
            <Grid item xs={12} md={6} className="home-grid-col">
               <Card style={contentCardStyle}>
                  <CardContent >
                     <Typography variant="h3" component="h3">
                        {recipe.name}
                     </Typography>
                     <Typography  color="textSecondary" gutterBottom>
                        <ul>
                           {renderIngredientLines(recipe.ingredients)}
                        </ul>
                     </Typography>
                     <Typography variant="body1" style={contentTextStyle} component="p">
                        <ol>
                           {renderStepLines(recipe.steps)}
                        </ol>
                     </Typography>  
                     <form onSubmit={handleSubmit}>
                        <input type='submit' className="submit-button" value="Add ingredients to grocery list"/>
                     </form>     
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </div>
    );
}

export default React.memo(Recipe);
