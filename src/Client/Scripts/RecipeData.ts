let recipes = [
    {
        recipeId: 0,
        name: 'Brownies',
        imgLink: '/images/recipeImages/brownies.jpg',
        time : 30,
        unit: 'Minutes',
        type: 'desserts',
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
        name: 'Mediterian Salad',
        imgLink: '/images/recipeImages/medsaladImg.jpg',
        time : 10,
        unit: 'Minutes',
        type: 'vegetarian',
        ingredients: [
            {
                ingredientName: 'Tomato',
                quantity: '2 Cups'
            },
            {
                ingredientName: 'Sliced Cucumber',
                quantity: '2 Cups'
            },
            {
                ingredientName: 'Spinach Leaves',
                quantity: '2 Cups'
            },
            {
                ingredientName: 'Chopped Red Onion',
                quantity: '1/2 Cup'
            },
            {
                ingredientName: 'Balsamic Vinegar',
                quantity: '4 Tbsp'
            },
            {
                ingredientName: 'Herb Seasoning',
                quantity: '1 Tbsp'
            }
        ],
        steps: [
            'Chop Tomatoes, Onion, and Cucumber',
            'Add all ingredients to bowl',
            'Mix!'
        ]
    },
    {
        recipeId: 2,
        name: 'Omelette',
        imgLink: '/images/recipeImages/omelette.jpeg',
        time : 15,
        unit: 'Minutes',
        type: 'vegetarian',
        ingredients: [
            {
                ingredientName: 'Eggs',
                quantity: '2'
            },
            {
                ingredientName: 'Cheese',
                quantity: '1 slice'
            },
            {
                ingredientName: 'Onion',
                quantity: '1/4 Cup'
            },
            {
                ingredientName: 'Peppers',
                quantity: '1/4 Cup'
            }
        ],
        steps: [
            'Whisk eggs in a bowl',
            'Pour egg into a pan and cook on medium heat for 3 minutes',
            'Add in Onions, Peppers, and Cheese',
            'Cook for more 5 minutes'
        ]
    },
    {
        recipeId: 3,
        name: 'Hamburger',
        imgLink: '/images/recipeImages/burger.jpeg',
        time : 30,
        unit: 'Minutes',
        type: 'beef',
        ingredients: [
            {
                ingredientName: 'Beef',
                quantity: '8 oz'
            },
            {
                ingredientName: 'Ketchup',
                quantity: '1 tablespoon'
            },
            {
                ingredientName: 'Mustard',
                quantity: '1 tablespoon'
            },
            {
                ingredientName: 'White Bun',
                quantity: '1'
            }
        ],
        steps: [
            'Form hamburger patty with beef ',
            'Cook in frying pan at medium heat for 10 minutes on each side',
            'Place on bun and top with Ketchup and Mustard'
        ]
    }
]

export default recipes;
