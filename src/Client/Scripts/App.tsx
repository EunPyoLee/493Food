import * as React from 'react';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom';

import Constants from './Constants';

import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Recipe from './Components/Recipe';
import Groceries from './Components/Groceries';
import NewRecipe from './Components/NewRecipe';

import {appbarStyle, appbarRowStyle} from '../Styles/Inline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const App: React.FC<{}> = () => {
  const {routes, strings} = Constants;
  const {home, recipes, recipe, groceries, newRecipe} = routes;
  const {appbarTitle} = strings;
  return(
    <BrowserRouter>
      <AppBar className="appbar-wrapper" position="static">
        <Toolbar className="appbar-toolbar" style={appbarStyle}>
              <Grid container direction="row" style={appbarRowStyle}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" className="appbar-external-links">
                  <Link to={recipes}> Recipes </Link> | 
                  <Link to={newRecipe}> Upload a recipe </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4} style={{textAlign: 'center'}}>
                    <Typography variant="h4" className="appbar-title"> <Link to={home}>{appbarTitle} </Link></Typography>
                </Grid>
                <Grid item xs={4}  style={{textAlign: 'end'}}>
                  <Typography variant="subtitle1" className="appbar-external-links">
                    <Link to={groceries}> My grocery list</Link>
                  </Typography>
                </Grid>
              </Grid>
          </Toolbar>
        </AppBar>
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
