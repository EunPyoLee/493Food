import * as React from 'react';
import Recipe from './Recipe'

const Recipes: React.FC<{}> = () => {

   return (
     <div className="Browse-Wrapper">
     <h1>Browse Recipes</h1>
      <div className="form-wrapper">
       <form>
        <div className="filter-fields">
         <div className="field">
          <div className="dropdown-field">
             <select name="filter-type" id="select-time">
             <option value="any-type">Select Type</option>
             <option value="chicken">Chicken</option>
             <option value="beef">Beef</option>
             <option value="vegetarian">Vegetarian</option>
             <option value="desserts">Desserts</option>
             </select>
          </div>
          </div>
           <div className="field">
            <div className="dropdown-field">
               <select name="filter-time" id="select-time">
               <option value="any-time">Select Time</option>
               <option value="10">Less than 10 Minutes</option>
               <option value="20">Less than 20 Minutes</option>
               <option value="30">Less than 30 Minutes</option>
               <option value="60">Less than 1 Hour</option>
               </select>
            </div>
            </div>
            <div className="field input">
            <input type="text" placeholder="Search by Ingredient"/>
            </div>
            <div className="field">
              <button className="SearchButton">Search</button>
            </div>
            </div>
            </form>
          </div>
          </div>
    );
}

export default React.memo(Recipes);
