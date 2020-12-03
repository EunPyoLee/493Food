import * as React from 'react';
import {IRecipeData, Ingredient} from '../Models/IRecipeData';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import recipes from '../RecipeData';
import {IGroceryList, list} from '../Models/IGroceryList';
import {ListIngredient} from '../Models/IRecipeData'

import {imgStyle, contentCardStyle} from '../../Styles/Components/StyleRecipe';
import { ReactComponent } from '*.svg';
import { isTemplateExpression } from 'typescript';

const RecipeCard: React.FC<IRecipeData> = (props:IRecipeData) => {
  const {recipeId, name, imgLink, ingredients, steps, likes} = props;
  const groceryIngredients: ListIngredient[] = ingredients.map((item, idx) => (
   {ingredientName: item.ingredientName}))

   let initialColor = "grey"
   if (recipes[recipeId].likes == 1) {
     initialColor = "red"
   }
   const [btncolor, setColor] = React.useState(initialColor);

   const renderIngredientLines = (ingredients: ReadonlyArray<Ingredient>): ReadonlyArray<React.ReactNode> => {
      return ingredients.map((ingredient, idx) => (
         <li key={idx}>
            <span className="ingredient">{ingredient.ingredientName}</span>
            <span className="quantity-ingredient"> : {ingredient.quantity}</span>
         </li>
      ))
  };

  const handleLike = function(event: React.MouseEvent): void {
   event.preventDefault();
   if (recipes[recipeId].likes == 1) {
     recipes[recipeId].likes = 0;
     setColor("grey");
   }
   else {
     recipes[recipeId].likes = 1;
     setColor("red");
   }
  }

  let addToList = function (event:React.FormEvent): void {
   event.preventDefault();
   let not_included: ListIngredient[] = [];
   not_included = groceryIngredients.filter(ingredient =>
      !list.some(item => item.ingredientName === ingredient.ingredientName))
   not_included.map((item, idx) => (
      list.push(item)
   ))
   alert("Ingredients added to list!");
 };

   return (
      <div className="recipecard-wrapper">
         <Grid className="home-grid-row" container spacing={0} style={{justifyContent: 'center'}}>
            <Grid item xs={12} md={6} className="home-grid-col">
               <CardMedia
                     image={imgLink}
                     style={imgStyle}
               />
            </Grid>
            <Grid item xs={12} md={6} className="home-grid-col">
               <Card style={contentCardStyle}>
                  <CardContent >
                     <Typography className="recipe-title" variant="h5" component="h5">
                        {name}
                     </Typography>
                     <ul>
                        <Typography  color="textSecondary" gutterBottom>
                           {renderIngredientLines(ingredients)}
                        </Typography>
                     </ul>
                     <div className="likes-attribute">
                        <button onClick={handleLike} className="likebtn">
                           <i className="fa fa-heart fa-lg" id={btncolor}></i>
                        </button>
                     </div>
                     <div className="add-to-list">
                        <button onClick={addToList} className="add-grocery-button">
                        Add ingredients to grocery list
                        </button>
                     </div>
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </div>
    );
}

export default React.memo(RecipeCard);
