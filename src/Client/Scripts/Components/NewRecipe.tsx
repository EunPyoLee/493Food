import * as React from 'react';
import {Link} from 'react-router-dom';
import Constant from '../Constants';
import Grid from '@material-ui/core/Grid';
import {Ingredient, IRecipeData, NewRecipeData} from '../Models/IRecipeData';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {imageStyle} from '../../Styles/Components/StyleNewRecipe';

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
      <li key={idx} className="new-list-item">
          <span className="new-list-item">{ingredient.ingredientName}</span>
          <span className="quantity-ingredient"> : {ingredient.quantity}</span>
      </li>
     ))
 };

 const renderSteps = function (): ReadonlyArray<React.ReactNode> {
     return state.steps.map((step, idx) => (
       <li key={idx} className="new-list-item">
           <span className="new-list-item">{step}</span>
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
        <h1 className="new-recipe-header">Upload New Recipe</h1>
          <div className="new-form-wrapper">
            <form onSubmit={handleSubmit} className="recipe-form">
            <Grid container spacing={2} style={{alignContent: 'flex-start'}}>
              <Grid container item xs={6} direction="column" >
              <div className="form-label">
                <label htmlFor="photo-upload">Upload Recipe Photo</label>
              </div>
              <div className="form-label">
                <label htmlFor="recipe-title">Recipe Title</label>
              </div>
              <div className="form-label">
                <label htmlFor="cook-time">Cook Time</label>
              </div>
              <div className="form-label">
                <label htmlFor="ingredient">Add an Ingredient</label>
              </div>

              </Grid>
              <Grid container item xs={6} direction="column" >
              <div className="form-item">
                <input type="file" name="photo-upload" className="file-button"/>
              </div>
              <div className="form-item">
                <input type="text" placeholder="Recipe Name" name="recipe-title"/>
              </div>
              <div className="form-item">
                <input type="Number" placeholder="45" name="cook-time"/>
                <select name="time-units" id="units-of-time">
                  <option value="minutes">Mins</option>
                  <option value="hours">Hrs</option>
                </select>
              </div>
              <div className="form-item">
                <input type="text" name="ingredient" placeholder="Ingredient Name"/>
                <input type="text" name="quantity" placeholder="Enter Quantity"/>
                <button className="form-button" type="button" onClick={updateIngredients}>Add Ingredient</button>
                <ol ingredients-wrapper>
                {renderIngredients()}
                </ol>
              </div>

              </Grid>
              <Grid container spacing={2} style={{alignContent: 'flex-start'}}>
                <Grid container item xs={6} direction="column" >
                <div className="form-label">
                  <label htmlFor="step">Recipe Step</label>
                </div>
                </Grid>
                <Grid container item xs={6} direction="column" >
                <div className="form-item">
                  <input type="text" name="step"/>
                  <button type="button" className="form-button" onClick={updateSteps}>Add Step</button>
                  <ol ingredients-wrapper>
                  {renderSteps()}
                  </ol>
                </div>
                </Grid>
              </Grid>
              </Grid>
              </form>
                <div className="submit-button-wrapper">
                  <input type='submit' className="submit-button"/>
                </div>
              </div>
          </div>
    );
}


export default React.memo(NewRecipe);
