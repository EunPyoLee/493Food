import * as React from 'react';
import {Link} from 'react-router-dom';
import { IGroceryList, list } from '../Models/IGroceryList';



const Groceries: React.FC<{}> = () => {

   let empty = <p>Your list is currently empty!</p>
   if(list[0]){
      empty = <p></p>
   };
   return (
      <div className="register-wrapper">
         <Link to="/">
            <div className="home-button">
               Home
            </div>
         </Link>
         <h1>My Grocery List</h1>
         <ul className="grocery-list">
            {empty}
            {list?.map(item => (
               <li>{item?.quantity} {' of '} {item?.ingredientName}<button ref={item?.ingredientName} className="delete-button" onClick="(function(item){
                  list.splice(list.findIndex(item.ingredientName,1)
              })();return false;">x</button></li>
            ))}
         </ul>
         <div className="send-button-wrapper">
            <button className="send-button">Send me my list!</button>
         </div>
      </div>
    );
}

export default React.memo(Groceries);
