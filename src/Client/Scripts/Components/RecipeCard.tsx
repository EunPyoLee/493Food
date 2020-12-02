import * as React from 'react';
import {IRecipeData, Ingredient} from '../Models/IRecipeData';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import {imgStyle, contentCardStyle} from '../../Styles/Components/StyleRecipe';
import { ReactComponent } from '*.svg';

const RecipeCard: React.FC<IRecipeData> = (props:IRecipeData) => {
   const {name, imgLink, ingredients, steps, likes} = props;
   const [btncolor, setColor] = React.useState("grey");

   const renderIngredientLines = (ingredients: ReadonlyArray<Ingredient>): ReadonlyArray<React.ReactNode> => {
      return ingredients.map((ingredient, idx) => (
         <li key={idx}>
            <span className="ingredient">{ingredient.ingredientName}</span>
            <span className="quantity-ingredient"> : {ingredient.quantity}</span>
         </li>
      ))
  };

  const handleLike = function(event: React.MouseEvent): void{
   event.preventDefault();
   setColor("red");
  }

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
                     <Typography variant="h5" component="h5">
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
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </div>
    );
}

export default React.memo(RecipeCard);


