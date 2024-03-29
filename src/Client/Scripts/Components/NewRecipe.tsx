import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import {NewRecipeData, NewRecipeInput, RecipeToAdd} from '../Models/INewRecipeData';
import recipes from '../RecipeData';

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

let updateIngredients = function (): void {
  state.ingredients.push({ingredientName:inState.ingredientInput, quantity:inState.quantityInput})
  setState({ingredients:state.ingredients, steps:state.steps})
  setInState(prevState =>({...prevState, "ingredientInput": "", "quantityInput": ''}))
};

let updateSteps = function (): void {
  state.steps.push(inState.stepInput)
  setState({ingredients:state.ingredients, steps:state.steps})
  setInState(prevState =>({...prevState, "stepInput": ""}))
};

let handleSubmit = function (): void {
  if (!inState.nameInput) {
    alert("Please Enter Recipe Name")
    return
  }
  if (!inState.imgInput) {
    alert("Please Select an Image")
    return
  }
  if (state.ingredients.length === 0) {
    alert("Please Add Ingredients")
    return
  }
  if (state.steps.length === 0) {
    alert("Please Add Steps")
    return
  }

  let myNewRecipe:RecipeToAdd = {
      recipeId: recipes.length,
      name: inState.nameInput,
      imgLink: inState.imgInput,
      time: inState.timeInput,
      unit: inState.unitInput,
      type: inState.typeInput,
      ingredients: state.ingredients,
      steps: state.steps,
      likes: 0,
  }
  recipes.push(myNewRecipe)
  console.log(recipes)
  setState({ingredients:[], steps:[]})
  alert("New Recipe Added!")
}

const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
   setInState(prevState => ({...prevState, [event.target.name]: event.target.value}));
}

const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
  if (event.target) {
    if (event.target.files) {
   const myFile = event.target.files[0]
   const myUrl = URL.createObjectURL(myFile)
   setInState(prevState => ({...prevState, [event.target.name]: myUrl}));
   console.log(myFile)
 }
}
}

const onChangeSelect= (event: React.ChangeEvent<HTMLSelectElement>): void => {
   setInState(prevState => ({...prevState, [event.target.name]: event.target.value}));
}

   return (
      <div className="new-recipe-form">
          <div className="new-form-wrapper">
          <h2 className="new-recipe-header">Upload New Recipe</h2>
            <form className="recipe-form">
            <Grid container item xs={12} spacing={1} style={{alignContent: 'left'}}>
              <Grid container item xs={12} spacing={3}>
              <Grid container item xs={2} spacing={1}></Grid>
              <Grid container item xs={4} spacing={1}>
              <div className="form-label">
                <label htmlFor="imgInput">Upload Recipe Photo</label>
              </div>
              </Grid>
              <Grid container item xs={6} spacing={1}>
              <div className="form-item">
                <input type="file" id="file" name="imgInput" className="inputfile file-button" accept="image/*" onChange={onChangeFile}/>
                <label htmlFor="file" >Upload Recipe Photo</label>
              </div>
              </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
              <Grid container item xs={2} spacing={1}></Grid>
              <Grid container item xs={4} spacing={1}>
              <div className="form-label">
                <label htmlFor="recipe-title">Recipe Title</label>
              </div>
              </Grid>
              <Grid container item xs={6} spacing={1}>
              <div className="form-item">
                <input className="recipe-title" type="text" placeholder="Recipe Name" name="nameInput" onChange={onChangeInput}/>
              </div>
              </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
              <Grid container item xs={2} spacing={1}></Grid>
              <Grid container item xs={4} spacing={1}>
                <div className="form-label">
                <label htmlFor="recipe-type">Recipe Type</label>
                </div>
                </Grid>
                <Grid container item xs={6} spacing={1}>
                <div className="form-item">
                <select className="recipe-type" name="typeInput" id="type-of-recipe" onChange={onChangeSelect}>
                  <option value="None">None</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Beef">Beef</option>
                  <option value="Pork">Pork</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Dessert">Dessert</option>
                </select>
              </div>
              </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
              <Grid container item xs={2} spacing={1}></Grid>
              <Grid container item xs={4} spacing={1}>
                <div className="form-label">
                <label htmlFor="cook-time">Cook Time</label>
                </div>
                </Grid>
                <Grid container item xs={6} spacing={1}>
                <div className="form-item">
                <input className="cook-time" type="Number" placeholder="0" name="timeInput" onChange={onChangeInput}/>
                <select className="cook-unit" name="unitInput" id="time-units" onChange={onChangeSelect}>
                  <option value="Minutes">Minutes</option>
                  <option value="Hours">Hours</option>
                </select>
              </div>
              </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
              <Grid container item xs={2} spacing={1}></Grid>
              <Grid container item xs={4} spacing={1}>
                <div className="form-label">
                <label htmlFor="ingredient">Add an Ingredient</label>
                </div>
                </Grid>
                <Grid container item xs={6} spacing={1}>
                <div className="form-item">
                <input className="ingredient-name" type="text" name="ingredientInput" placeholder="Ingredient Name" value={inState.ingredientInput} onChange={onChangeInput}/>
                <input className="ingredient-qty" type="text" name="quantityInput" placeholder="Enter Quantity" value={inState.quantityInput} onChange={onChangeInput}/>
                <button className="button-holder form-button" type="button" onClick={updateIngredients}>
                  <img src='/images/add-list-icon.png' alt="icon"/>
                </button>
                <ol className="ingredients-wrapper">
                {renderIngredients()}
                </ol>
              </div>
              </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
              <Grid container item xs={2} spacing={1}></Grid>
              <Grid container item xs={4} spacing={1}>
                <div className="form-label">
                  <label htmlFor="step">Recipe Step</label>
                </div>
                </Grid>
                <Grid container item xs={6} spacing={1}>
                <div className="form-item">
                  <input className="step-input" type="text" placeholder="Enter Step" value={inState.stepInput} name="stepInput" onChange={onChangeInput}/>
                  <button type="button" className="button-holder form-button" onClick={updateSteps}>
                  <img src='/images/add-list-icon.png' alt="icon"/>
                  </button>
                  <ol className="ingredients-wrapper">
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
