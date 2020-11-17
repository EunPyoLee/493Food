import * as React from 'react';
import {Link} from 'react-router-dom';

const NewRecipe: React.FC<{}> = () => {
//Just for Prototype will alert when action is completed, will fill in functionality later
let handleAddIngredient = function (): void {
  alert("Ingredient Added!");
};

let handleAddStep = function (): void {
  alert("Step Added!");
};

let handleSubmit = function (event:React.FormEvent): void {
  event.preventDefault();
  console.log(event)
  alert("New Recipe Uploaded!");
};

   return (
      <div className="new-recipe-form">
      <Link to="/">
        <div className="home-button">
        Home
        </div>
      </Link>
      <h1>Upload New Recipe</h1>
         <form onSubmit={handleSubmit} className="recipe-form">
            <div className="form-item">
              <label htmlFor="photo-upload">Upload Recipe Photo</label>
              <input type="file" name="photo-upload"/>
            </div>
            <div className="form-item">
              <label htmlFor="recipe-title">Recipe Title</label>
              <input type="text" placeholder="Recipe Name" name="recipe-title"/>
            </div>
            <div className="form-item">
              <label htmlFor="cook-time">Cook Time</label>
              <input type="Number" placeholder="45" name="cook-time"/>
              <label htmlFor="time-units">Cook Time Units</label>
              <select name="time-units" id="units-of-time">
                <option value="minutes">Mins</option>
                <option value="hours">Hrs</option>
              </select>
            </div>
            <div className="form-item">
              <label htmlFor="ingredient">Add an Ingredient</label>
              <input type="text" name="ingredient" placeholder="Ingredient Name"/>
              <label htmlFor="quantity">Quantity</label>
              <input type="Number" name="quantity"/>
              <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
            </div>
            <div className="form-item">
              <label htmlFor="step">Recipe Step</label>
              <input type="text" name="step"/>
              <button type="button" onClick={handleAddStep}>Add Step</button>
            <div className="form-item">
              <input type='submit'/>
            </div>
          </div>
         </form>
      </div>
    );
}


export default React.memo(NewRecipe);
