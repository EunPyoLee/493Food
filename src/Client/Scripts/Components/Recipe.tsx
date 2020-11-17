import * as React from 'react';

interface Ingredient {
   ingredient: string;
   quantity: string;
}

interface prepTime {
   time: number;
   units: string;
}

interface RecipeData {
   photo: File; 
   recipeName: string; 
   prepTime: prepTime;
   ingredients: [Ingredient];
   steps: [string];
}
const Recipe: React.FC<RecipeData> = (props) => {

   return (
      <div className="recipe-card">
         <img className="recipe-photo" src="{{props.photo}}"/>
         <h2 className="recipe-title">
            {props.recipeName}
         </h2>
         <p className="prep-time">{props.prepTime.time} {props.prepTime.units}</p>
         <div className="recipe-ingredients">
            <ul>
            {(props.ingredients).map((ingredient) => (
               <li>
                  <span className="ingredient">{ingredient.ingredient}</span>
                  <span className="quantity-ingredient">{ingredient.quantity}</span>
               </li>
            ))}
            </ul>
         </div>
         <div className="recipe-steps">
            <ol>
            {(props.steps).map((step) => (
               <li>{step}</li>
            ))}
            </ol>
         </div>
      </div>
    );
}

export default React.memo(Recipe);