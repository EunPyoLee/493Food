import * as React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Constant from '../Constants';
import recipes from '../RecipeData';
import {imageStyle} from '../../Styles/Components/StyleHome';

const Home: React.FC<{}> = () => {
  const {contents : {homeContents}} = Constant;
  const randRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  const {welcomeTitle, welcomeImg, browseTitle, browseImg, randomTitle, randomImg, groceryImg, groceryTitle} = homeContents;

   return (
      <div className="home-wrapper">
        <Grid className="home-grid-row" container spacing={9} style={{justifyContent: 'center'}}>
          <Grid item xs={12} lg={6} className="home-grid-col">
            <CardActionArea className="card-wrapper" style={{pointerEvents: "none"}}>
                <div className="home-welcome-wrapper">
                  <CardMedia
                      style={imageStyle}
                      image={welcomeImg}
                      title="About Me"
                  />
                  <div className="image-text">{welcomeTitle}</div>
                </div>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} lg={6} className="home-grid-col">
            <CardActionArea className="card-wrapper">
              <Link to="/Recipes">
                <div className="home-image-wrapper">
                    <CardMedia
                        style={imageStyle}
                        image={browseImg}
                        title="About Me"
                    />
                    <div className="image-text">{browseTitle}</div>
                  </div>
              </Link>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} lg={6} className="home-grid-col">
            <CardActionArea className="card-wrapper">
              <Link to={`/recipe/${randRecipe.recipeId}`}>
                <div className="home-image-wrapper">
                  <CardMedia
                      style={imageStyle}
                      image={randomImg}
                      title="About Me"
                  />
                  <div className="image-text">{randomTitle}</div>
                </div>
              </Link>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} lg={6} className="home-grid-col">
            <CardActionArea className="card-wrapper">
              <Link to="/Groceries">
                <div className="home-image-wrapper">
                  <CardMedia
                      style={imageStyle}
                      image={groceryImg}
                      title="About Me"
                  />
                  <div className="image-text">{groceryTitle}</div>
                </div>
              </Link>
            </CardActionArea>
          </Grid>
        </Grid>
      </div>
    );
}

export default React.memo(Home);
