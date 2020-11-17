import * as React from 'react';


const NewRecipe: React.FC<{}> = () => {
   
   return (
      <div className="new-recipe-form">
         <form>
            <label htmlFor="photo-upload">Upload Recipe Photo</label>
            <input type="file" name="photo-upload"/>
            <label htmlFor="recipe-title">Recipe Title</label>
            <input type="text" placeholder="Recipe Name" name="recipe-title"/>
            <label htmlFor="cook-time">Cook Time</label>
            <input type="Number" placeholder="45" name="cook-time"/>
            <label htmlFor="time-units">Cook Time Units</label>
            <select name="time-units" id="units-of-time">
               <option value="minutes">Mins</option>
               <option value="hours">Hrs</option>
            </select>
            <label htmlFor="ingredient">Add an Ingredient</label>
            <input type="text" name="ingredient" placeholder="Ingredient Name"/>
            <label htmlFor="quantity">Ingredient Quantity</label>
            <input type="Number" name="quantity"/>
            <button onClick="addIngredient to list idk how">Add Ingredient</button> 
            <label htmlFor="step">Recipe Step</label>
            <input type="text" name="step"/>
            <button onClick="add step to list idk how">Add Step</button> 
         </form>
      </div>
    );
}


export default React.memo(NewRecipe);