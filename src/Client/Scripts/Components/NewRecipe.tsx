import * as React from 'react';
import {Link} from 'react-router-dom';
import Constant from '../Constants';
import Grid from '@material-ui/core/Grid';
import {Ingredient, IRecipeData, NewRecipeData} from '../Models/IRecipeData';

type NewRecipeState = {
  stepsToAdd:string[],
  ingredientsToAdd:Ingredient[]
}

const NewRecipe: React.FC<{}> = () => {

let myRecipeData:NewRecipeData = {
      ingredients: [],
      steps: [],
  }

const [state, setState] = React.useState<NewRecipeData>(myRecipeData);

const renderIngredients = (): ReadonlyArray<React.ReactNode> => {
    return state.ingredients.map((ingredient, idx) => (
      <li key={idx}>
          <span className="ingredient">{ingredient.ingredientName}</span>
          <span className="quantity-ingredient"> : {ingredient.quantity}</span>
      </li>
     ))
 };

 const renderSteps = function (): ReadonlyArray<React.ReactNode> {
     return state.steps.map((step, idx) => (
       <li key={idx}>
           <span className="ingredient">{step}</span>
       </li>
      ))
  };

//Just for Prototype will alert when action is completed, will fill in functionality later
let updateIngredients = function (): void {
  state.ingredients.push({ingredientName:"new name", quantity:"new unit"})
  setState({ingredients:state.ingredients, steps:state.steps})
};

let updateSteps = function (): void {
  state.steps.push("new step")
  setState({ingredients:state.ingredients, steps:state.steps})
};

let handleSubmit = function (event:React.FormEvent): void {
  event.preventDefault();
  console.log(event)
  alert("New Recipe Uploaded!");
};

   return (
      <div className="new-recipe-form">
        <h1>Upload New Recipe</h1>
          <div className="form-wrapper">
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
                  <label htmlFor="recipe-type">Recipe Type</label>
                  <select name="recipe-type" id="recipetype">
                    <option value="Other">Other</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Beef">Beef</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Dessert">Dessert</option>
                  </select>
                  </div>
                <div className="form-item">
                  <label htmlFor="cook-time">Cook Time</label>
                  <input type="Number" placeholder="45" name="cook-time"/>
                  <select name="time-units" id="units-of-time">
                    <option value="minutes">Mins</option>
                    <option value="hours">Hrs</option>
                  </select>
                </div>
                <div className="form-item">
                  <label htmlFor="ingredient">Add an Ingredient</label>
                  <input type="text" name="ingredient" placeholder="Ingredient Name"/>
                  <input type="text" name="quantity" placeholder="Enter Quantity"/>
                  <button type="button" onClick={updateIngredients}>Add Ingredient</button>
                  <ol ingredients-wrapper>
                  {renderIngredients()}
                  </ol>
                </div>
                <div className="form-item">
                  <label htmlFor="step">Recipe Step</label>
                  <input type="text" name="step"/>
                  <button type="button" onClick={updateSteps}>Add Step</button>
                  <ol ingredients-wrapper>
                  {renderSteps()}
                  </ol>
                <div className="form-item">
                  <input type='submit'/>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
}


export default React.memo(NewRecipe);
