import * as React from 'react';
import Recipe from './Recipe';
import {Link} from 'react-router-dom';

const Register: React.FC<{}> = () => {
   return (
      <div className="random-wrapper">
      <Link to="/">
        <div className="home-button">
        Home
        </div>
      </Link>
      <h1>Random Recipe</h1>
      <div className="recipe-wrapper">
         <Recipe photo="uploads/brownies.jpeg" recipeName="Brownies" prepTime={{time:30,units:"Minutes"}} ingredients={[{ingredient:"Brownie Mix", quantity:"1 bag"}, {ingredient:"Egg", quantity:"2"}, {ingredient:"Oil", quantity:"1/2 Cup"}]} steps={["Add ingredients to bowl", "mix", "Pour into pan", "bake for 20 minutes at 350", "eat"]}></Recipe>
      </div>

      </div>
    );
}

export default React.memo(Register);
