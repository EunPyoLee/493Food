import * as React from 'react';
import IRecipeData from '../Models/IRecipeData';


const RecipeCard: React.FC<IRecipeData> = (props:IRecipeData) => {
   return (
      <div className="recipe-card">
         <img className="recipe-photo" src={props.imgLink} alt={`${props.name}`}/>
         <h2 className="recipe-title">
            {props.name}
         </h2>
         <p className="prep-time">{props.time} {props.unit}</p>
         <div className="recipe-ingredients">
            <ul>
            {(props.ingredients).map((ingredient, idx) => (
               <li key={idx}>
                  <span className="ingredient">{ingredient.ingredientName}</span>
                  <span className="quantity-ingredient"> : {ingredient.quantity}</span>
               </li>
            ))}
            </ul>
         </div>
         <div className="recipe-steps">
            <ol>
            {(props.steps).map((step, idx) => (
               <li key={idx}>{step}</li>
            ))}
            </ol>
         </div>
      </div>
    );
}

export default React.memo(RecipeCard);
