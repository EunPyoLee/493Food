import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import {NewRecipeData, NewRecipeInput, RecipeToAdd} from '../Models/INewRecipeData';
import {Ingredient, IRecipeData} from '../Models/IRecipeData'
import recipes from '../RecipeData';

type NewRecipeState = {
  stepsToAdd:string[],
  ingredientsToAdd:Ingredient[]
}


const NewRecipe: React.FC<{}> = () => {

let myRecipeData:NewRecipeData = {
      ingredients: [],
      steps: [],
  }

let myRecipeInput:NewRecipeInput = {
  nameInput: '',
  timeInput: 0,
  unitInput: 'Minutes',
  typeInput: 'None',
  imgInput: '',
  ingredientInput: '',
  quantityInput: '',
  stepInput:'',
    }


const [state, setState] = React.useState<NewRecipeData>(myRecipeData);
const [inState, setInState] = React.useState<NewRecipeInput>(myRecipeInput);

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
  state.ingredients.push({ingredientName:inState.ingredientInput, quantity:inState.quantityInput})
  setState({ingredients:state.ingredients, steps:state.steps})
};

let updateSteps = function (): void {
  state.steps.push(inState.stepInput)
  setState({ingredients:state.ingredients, steps:state.steps})
};

let handleSubmit = function (): void {
  alert("New Recipe Added!")
  let myNewRecipe:RecipeToAdd = {
      recipeId: recipes.length,
      name: inState.nameInput,
      imgLink: inState.imgInput,
      time: inState.timeInput,
      unit: inState.unitInput,
      type: inState.typeInput,
      ingredients: state.ingredients,
      steps: state.steps,
  }
  recipes.push(myNewRecipe)
  console.log(recipes)
}

const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
   setInState(prevState => ({...prevState, [event.target.name]: event.target.value}));
}

const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
  if (event.target) {
    if (event.target.files) {
   const myFile = event.target.files[0]
   setInState(prevState => ({...prevState, [event.target.name]: "/images/" + myFile.name}));
   console.log(myFile)
 }
}
}

const onChangeSelect= (event: React.ChangeEvent<HTMLSelectElement>): void => {
   setInState(prevState => ({...prevState, [event.target.name]: event.target.value}));
   console.log(event.target.name)
   console.log(event.target.value)
}

   return (
      <div className="new-recipe-form">
        <h1 className="new-recipe-header">Upload New Recipe</h1>
          <div className="new-form-wrapper">
            <form className="recipe-form">
            <Grid container spacing={2} style={{alignContent: 'flex-start'}}>
              <Grid container item xs={6} direction="column" >
              <div className="form-label">
                <label htmlFor="photo-upload">Upload Recipe Photo</label>
              </div>
              <div className="form-label">
                <label htmlFor="recipe-title">Recipe Title</label>
              </div>
              <div className="form-label">
                <label htmlFor="recipe-type">Recipe Type</label>
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
                <input type="file" name="imgInput" className="file-button" accept="image/*" onChange={onChangeFile}/>
              </div>
              <div className="form-item">
                <input type="text" placeholder="Recipe Name" name="nameInput" onChange={onChangeInput}/>
              </div>
              <div className="form-item">
                <select name="typeInput" id="type-of-recipe" onChange={onChangeSelect}>
                  <option value="None">None</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Beef">Beef</option>
                  <option value="Pork">Pork</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Dessert">Dessert</option>
                </select>
              </div>
              <div className="form-item">
                <input type="Number" placeholder="0" name="timeInput" onChange={onChangeInput}/>
                <select name="unitInput" id="time-units" onChange={onChangeSelect}>
                  <option value="Minutes">Minutes</option>
                  <option value="Hours">Hours</option>
                </select>
              </div>
              <div className="form-item">
                <input type="text" name="ingredientInput" placeholder="Ingredient Name" onChange={onChangeInput}/>
                <input type="text" name="quantityInput" placeholder="Enter Quantity" onChange={onChangeInput}/>
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
                  <input type="text" name="stepInput" onChange={onChangeInput}/>
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
                  <button type='submit' onClick={handleSubmit} className="submit-button">Submit!</button>
                </div>
              </div>
          </div>
    );
}


export default React.memo(NewRecipe);
