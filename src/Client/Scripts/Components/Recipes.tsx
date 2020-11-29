import * as React from 'react';
import {Link} from 'react-router-dom';
import recipes from '../RecipeData';
import RecipeCard from './RecipeCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import IFilterOptions from '../Models/IFilterOptions'

const Recipes: React.FC<{}> = () => {
   const [state, setState] = React.useState<IFilterOptions>({
      typeOption: 'none',
      timeOption: 0,
      searchText: '',
      filteredRecipe: recipes
   });
   const handleFilter = function(event: React.FormEvent): void {
      event.preventDefault();
      const {typeOption, timeOption, searchText} = state;
      console.log(typeOption, timeOption)
      if(typeOption === 'none' && timeOption === 0 && searchText === ''){
         setState(prevState => ({
            ...prevState,
            filteredRecipe: recipes
         }));
         return;
      }//Default option

      if(typeOption !== 'none' && timeOption > 0 && searchText !== ''){
         setState(prevState => ({
            ...prevState,
            filteredRecipe: recipes.filter(
               recipe => recipe.type === typeOption && recipe.time <= timeOption && recipe.name.toLowerCase().search(searchText.toLowerCase()) !== -1)
         }));
      }
      else if(typeOption !== 'none' && timeOption > 0){
         setState(prevState => ({
            ...prevState,
            filteredRecipe: recipes.filter(
               recipe => recipe.type === typeOption && recipe.time <= timeOption)
         }));
      }
      else if(typeOption !== 'none' && searchText !== ''){
         setState(prevState => ({
            ...prevState,
            filteredRecipe: recipes.filter(
               recipe => recipe.type === typeOption && recipe.name.toLowerCase().search(searchText.toLowerCase()) !== -1)
         }));
      }
      else if(timeOption > 0 && searchText !== ''){
         setState(prevState => ({
            ...prevState,
            filteredRecipe: recipes.filter(
               recipe => recipe.time <= timeOption &&  recipe.name.toLowerCase().search(searchText.toLowerCase()) !== -1)
         }));
      }
      else if(typeOption !== 'none'){
         setState(prevState => ({
            ...prevState,
            filteredRecipe: recipes.filter(
               recipe => recipe.type === typeOption)
         }));
      }
      else if(timeOption > 0){
         setState(prevState => ({
            ...prevState,
            filteredRecipe: recipes.filter(
               recipe => recipe.time <= timeOption)
         }));
      }
      else{
         console.log(searchText);
         setState(prevState => ({
            ...prevState,
            filteredRecipe: recipes.filter(
               recipe => recipe.name.toLowerCase().search(searchText.toLowerCase()) !== -1)
         }));
      }
   }

   const onChangeType = (event: React.ChangeEvent<HTMLSelectElement>): void => {
      const {name, value} = event.target;
      setState(prevState => ({...prevState, [name]: value}));
   }

   const onChangeTime = (event: React.ChangeEvent<HTMLSelectElement>): void => {
      const {name, value} = event.target;
      setState(prevState => ({...prevState, [name]: value}));
   }

   const onChangeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const {name, value} = event.target;
      console.log(name, value);
      setState(prevState => ({...prevState, [name]: value}));
   };

   const {filteredRecipe} = state;
   return (
      <div className="Browse-Wrapper">
         <div className="form-wrapper">
            <form onSubmit={handleFilter}>
               <Grid container spacing={2} direction='column' style={{padding: '20px'}}>
                  <Grid container item xs={6}>
                     <div className="filter-wrapper">
                     <div className='button-holder'>
                        <img src='/images/type_icon.png' />
                     </div>
                     <select onChange={onChangeType} name="typeOption" id="select-type">
                        <option disabled>Select Type</option>
                        <option value="none">Recipe Type</option>
                        <option value="chicken">Chicken</option>
                        <option value="beef">Beef</option>
                        <option value="pork">Pork</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="desserts">Desserts</option>
                     </select>
                     </div>
                  </Grid>
                  <Grid container item xs={6}>
                  <div className='button-holder'>
                        <img src='/images/time-icon.png' />
                     </div>
                     <select onChange={onChangeTime} name="timeOption" id="select-time">
                        <option disabled>Select Time</option>
                        <option value={0}>Time</option>
                        <option value={10}>Less than 10 Minutes</option>
                        <option value={20}>Less than 20 Minutes</option>
                        <option value={30}>Less than 30 Minutes</option>
                        <option value={60}>Less than 1 Hour</option>
                     </select>
                  </Grid>
                  <Grid container item xs={6}>
                     <div className='button-holder'>
                        <img src='/images/search-icon.png' />
                     </div>
                     <input
                        onChange={onChangeText}
                        id="type-search"
                        type="text" name='searchText'
                        placeholder="Search by Name"
                        value={state.searchText}
                     />
                  </Grid>
                  <Grid>
                        <button id="search-bttn">Search</button>
                  </Grid>
               </Grid>
               </form>
         </div>
         <div className="search-results">
            <Grid className="recipecard-grid-row" container spacing={0} style={{justifyContent: 'flex-start'}}>
               {filteredRecipe.map((recipe, idx) =>(
                <Grid key={idx} item sm={7} md={6} className="recipecard-grid-col" >
                   <Link to={`/recipe/${recipe.recipeId}`} key={idx}>
                     <RecipeCard
                        recipeId={recipe.recipeId}
                        name={recipe.name}
                        imgLink={recipe.imgLink}
                        time={recipe.time}
                        unit={recipe.unit}
                        type={recipe.type}
                        ingredients={recipe.ingredients}
                        steps={recipe.steps}
                        likes={recipe.likes}
                     />
                  </Link>
                </Grid>
            ))}
            </Grid>
          </div>
      </div>
   );
}

export default React.memo(Recipes);
