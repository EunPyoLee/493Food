import * as React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Constants from './Constants';

import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Recipe from './Components/Recipe';
import Groceries from './Components/Groceries';
import NewRecipe from './Components/NewRecipe';

const App: React.FC<{}> = () => {
  const {routes} = Constants;
  const {home, recipes, recipe, groceries, newRecipe} = routes;
  return(
    <BrowserRouter>
         <Switch>
            <Route exact path={home} component={Home} />
            <Route exact path={recipes} component={Recipes} />
            <Route exact path={recipe} component={Recipe}/>
            <Route exact path={groceries} component={Groceries} />
            <Route exact path={newRecipe} component={NewRecipe} />
         </Switch>
      </BrowserRouter>
  )
}

export default React.memo(App);
