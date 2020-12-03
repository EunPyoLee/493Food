//Define constants here
const constants = {
    routes: {
        home: '/',
        recipes: '/recipes',
        recipe: '/recipe/:recipeId',
        groceries: '/groceries',
        newRecipe: '/newRecipe'
    },
    strings: {
        appbarTitle: 'Recipe493'
    },
    contents: {
        homeContents: {
            uploadTitle: 'Upload New Recipe',
            uploadImg: '/images/welcomeImg.jpg',
            browseTitle: 'Browse Recipes',
            browseImg: '/images/browseImg.jpg',
            randomTitle: 'Recommended Recipe',
            randomImg: '/images/randomImg.jpg',
            groceryTitle: 'My Grocery List',
            groceryImg: '/images/groceryImg.jpg'
        }
    }
};
export default Object.freeze(constants);
