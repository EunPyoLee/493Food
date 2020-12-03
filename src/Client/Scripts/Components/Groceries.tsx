import * as React from 'react';
import {ListIngredient} from '../Models/IRecipeData'
import { list } from '../Models/IGroceryList';
import Grid from '@material-ui/core/Grid';

type GroceriesState = {
  grocerylist:ListIngredient[],
  newitem: ListIngredient
}
type EmailState = {
   email: string,
   subject: string,
   content: string,
}
const Groceries: React.FC<{}> = () => {

   let myIngredients:GroceriesState = {grocerylist: list, newitem: {ingredientName: ""}}
   const [state, setState] = React.useState<GroceriesState>(myIngredients);
   const [emailState, setEmail] = React.useState<EmailState>({
      email: "",
      subject: "Recipe493 Grocery List",
      content: ""
   });

   let empty = <div id="empty_list">Your list is currently empty!</div>
   if(list[0]){
      empty = <div></div>
   };
   let checkOffItem = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const name = event.target.name;
      event.currentTarget.checked= true
      const index:number = parseInt(name)
      list.splice(index, 1);
      setState({grocerylist:list, newitem: {ingredientName: ""}})
    };

   const renderIngredients = (): ReadonlyArray<React.ReactNode> => {
       return state.grocerylist.map((ingredient, idx) => (
         <li key={idx} className="grocery-list-item">
             <input type="checkbox" checked={false} name={idx.toString()} onChange={checkOffItem} className="checkbox"/>
             <span className="name-ingredient">{ingredient.ingredientName}</span>
         </li>
        ))
    };

   let updateGroceries = function (event:React.FormEvent): void {
      event.preventDefault();
      if(!list.some(item => item.ingredientName === state.newitem.ingredientName))
      {
         if(state.newitem.ingredientName)
         {
            list.push(state.newitem)
         }
      }
      setState({grocerylist:state.grocerylist, newitem: {ingredientName: ""}})
    };


    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const {name, value} = event.target;
      console.log(name, value);
      setState(prevState => ({...prevState, [name]: {ingredientName: value}}));
   };

   const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const {name, value} = event.target;
      setEmail(prevState => ({...prevState, [name]: value }));
   };

   const sendListClick = function (): void {
      const output = document.getElementById("email-form");
      if(output)
      {
         output.style.visibility = "visible";
      }
    };

   let sendEmail = function (): void {
      let emailbody = "Your%20Grocery%20List%0d%0a";
      state.grocerylist.forEach( ingredient =>
         emailbody += ("%0d%0a" + ingredient.ingredientName.toString() + "%0d%0a")
      );
      let link = "mailto:" + emailState.email + "?subject=" + emailState.subject + "&body=" + emailbody;
      window.open(link);
      const output = document.getElementById("email-form");
      if(output)
      {
         output.style.visibility = "hidden";
      }
   };

   return (
      <div className="grocerylist-wrapper">
         <h2 id="grocery_heading">My Grocery List</h2>
         {empty}
          <ul className="grocery-list">
          {renderIngredients()}
          </ul>
          <Grid container item
          justify="center">
             <input
               onChange={onChangeText}
               id="add-grocery-item"
               type="text" name='newitem'
               placeholder="Add Grocery Item"
               value={state.newitem.ingredientName}
            />
            <button className="button-holder" type="button" onClick={updateGroceries}>
               <img src='/images/add-list-icon.png' alt="recipe"/>
            </button>
          </Grid>
         <div className="send-button-wrapper">
            <button className="send-button" type='button' onClick={sendListClick}>Send me my list!</button>
         </div>
         <Grid container item
          justify="center">
             <div id="email-form">
            <input
            onChange={onEmailChange}
            id='email-input'
            type='text'
            name='email'
            placeholder='yourEmail@email_provider.com'
            value={emailState.email}
            />
            <div className="send-email-wrapper">
            <button className="send-email" type='button' onClick={sendEmail}>Send Email!</button>
         </div>
         </div>
          </Grid>
      </div>
    );
}

export default React.memo(Groceries);
