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
    recipes:[
        {
            recipeId: 0,
            name: 'Brownies',
            imgLink: '/images/recipeImages/brownies.jpeg',
            time : 30,
            unit: 'Minutes',
            ingredients: [
                {
                    ingredientName: 'Brownie Mix',
                    quantity: '1 bag'
                },
                {
                    ingredientName: 'Egg',
                    quantity: '2'
                },
                {
                    ingredientName: 'Oil',
                    quantity: '1/2 Cup'
                },
                {
                    ingredientName: 'Sugar',
                    quantity: '5 Tbsp'
                }
            ],
            steps: [
                'Mix Brownie Mix with Eggs',
                'Mix in the sugar',
                'Bake the brownie for 25-30 minutes in a 350F oven'
            ]
        },
        {
            recipeId: 1,
            name: 'Brownies',
            imgLink: '/images/recipeImages/brownies.jpeg',
            time : 30,
            unit: 'Minutes',
            ingredients: [
                {
                    ingredientName: 'Brownie Mix',
                    quantity: '1 bag'
                },
                {
                    ingredientName: 'Egg',
                    quantity: '2'
                },
                {
                    ingredientName: 'Oil',
                    quantity: '1/2 Cup'
                }
            ],
            steps: [
                'Mix Brownie Mix with Eggs',
                'Mix in the sugar',
                'Bake the brownie for 25-30 minutes in a 350F oven'
            ]
        },
        {
            recipeId: 2,
            name: 'Brownies',
            imgLink: '/images/recipeImages/brownies.jpeg',
            time : 30,
            unit: 'Minutes',
            ingredients: [
                {
                    ingredientName: 'Brownie Mix',
                    quantity: '1 bag'
                },
                {
                    ingredientName: 'Egg',
                    quantity: '2'
                },
                {
                    ingredientName: 'Oil',
                    quantity: '1/2 Cup'
                }
            ],
            steps: [
                'Mix Brownie Mix with Eggs',
                'Mix in the sugar',
                'Bake the brownie for 25-30 minutes in a 350F oven'
            ]
        },
        {
            recipeId: 3,
            name: 'Brownies',
            imgLink: '/images/recipeImages/brownies.jpeg',
            time : 30,
            unit: 'Minutes',
            ingredients: [
                {
                    ingredientName: 'Brownie Mix',
                    quantity: '1 bag'
                },
                {
                    ingredientName: 'Egg',
                    quantity: '2'
                },
                {
                    ingredientName: 'Oil',
                    quantity: '1/2 Cup'
                }
            ],
            steps: [
                'Mix Brownie Mix with Eggs',
                'Mix in the sugar',
                'Bake the brownie for 25-30 minutes in a 350F oven'
            ]
        }
    ]
};
export default Object.freeze(constants);
