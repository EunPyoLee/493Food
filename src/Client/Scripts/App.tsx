import * as React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Constants from './Constants';

import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Recipe from './Components/Recipe';
import Register from './Components/Register';
import Groceries from './Components/Groceries';

const App: React.FC<{}> = () => {
  const {routes} = Constants;
  const {home, recipes, recipe, register, groceries} = routes;
  return(
    <BrowserRouter>
         <Switch>
            <Route exact path={home} component={Home} />
            <Route exact path={recipes} component={Recipes} />
            <Route exact path={recipe} component={Recipe} />
            <Route exact path={register} component={Register} />
            <Route exact path={groceries} component={Groceries} />
         </Switch>
      </BrowserRouter>
  )
}

export default React.memo(App);
