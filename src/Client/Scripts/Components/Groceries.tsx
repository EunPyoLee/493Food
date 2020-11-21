import * as React from 'react';
import {Link} from 'react-router-dom';
const Groceries: React.FC<{}> = () => {
   return (
      <div className="register-wrapper">
         <Link to="/">
            <div className="home-button">
               Home
            </div>
         </Link>
         <h1>My Grocery List</h1>
         <ul className="grocery-list">
            <li>Brownie Mix<button className="delete-button">x</button></li>
            <li>Eggs<button className="delete-button">x</button></li>
            <li>Oil<button className="delete-button">x</button></li>
         </ul>
         <div className="send-button-wrapper">
            <button className="send-button">Send me my list!</button>
         </div>
      </div>
    );
}

export default React.memo(Groceries);
