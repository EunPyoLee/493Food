import * as React from 'react';
import {Link} from 'react-router-dom';
import {Ingredient} from '../Models/IRecipeData'
import { IGroceryList, list } from '../Models/IGroceryList';

type GroceriesState = {
  grocerylist:Ingredient[],
}

const Groceries: React.FC<{}> = () => {

   let myIngredients:GroceriesState = {grocerylist: list}
   const [state, setState] = React.useState<GroceriesState>(myIngredients);


   let empty = <div>Your list is currently empty!</div>
   if(list[0]){
      empty = <div></div>
   };

   const renderIngredients = (): ReadonlyArray<React.ReactNode> => {
       return state.grocerylist.map((ingredient, idx) => (
         <li key={idx} className="grocery-list-item">
             <span className="name-ingredient">{ingredient.ingredientName}</span>
             <span className="quantity-ingredient"> : {ingredient.quantity}</span>
             <button id={idx.toString()} onClick={handleDelete} className="delete-button" >x</button>
         </li>
        ))
    };

   let handleDelete = function (event: React.MouseEvent<HTMLButtonElement>): void {
     event.preventDefault();
     let index:number= parseInt(event.currentTarget.id)
     list.splice(index, 1)
     console.log(index)
     console.log(list)
     setState({grocerylist:list})
   };


   return (
      <div className="register-wrapper">
         <h1>My Grocery List</h1>
          <ul className="grocery-list">
          {empty}
          {renderIngredients()}
          </ul>
         <div className="send-button-wrapper">
            <button className="send-button">Send me my list!</button>
         </div>
      </div>
    );
}

export default React.memo(Groceries);
