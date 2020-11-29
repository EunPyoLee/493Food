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
        ],
        likes: 0
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
        ],
        likes: 0
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
        ],
        likes: 0
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
        ],
        likes: 0
    },
    {
        recipeId: 4,
        name: 'Western Omelette',
        imgLink: '/images/recipeImages/western-omelette.jpg',
        time : 15,
        unit: 'Minutes',
        type: 'vegetarian',
        ingredients: [
            {
                ingredientName: 'Butter',
                quantity: '1 Tbsp'
            },
            {
                ingredientName: 'Egg',
                quantity: '3'
            },
            {
                ingredientName: 'Chopped Onion',
                quantity: '1/2 Cup'
            },
            {
                ingredientName: 'Chopped Bell Pepper',
                quantity: '1/2 Cup'
            },
            {
                ingredientName: 'Chopped Ham',
                quantity: '1/4 Cup'
            },
            {
                ingredientName: 'Cheddar Cheese',
                quantity: '1/4 Cup'
            }
        ],
        steps: [
            'In a medium bowl beat the eggs well. Set aside',
            'In an 8 inch skillet, melt 1 tbsp of butter. Add in the onion and saute until tender',
            'Add in the bell peppers and fry until the onions are softened to your liking and the bell peppers are tender crisp',
            'Add the ham and cook for one more minute, stirring',
            'Pour the eggs mixture over top of the fried ham/vegetables mixture',
            'Turn down the stove heat to low and cover with a lid for about 4-5 minutes.',
            'Once the eggs are solid and cooked almost through, flip the entire circle and cook for one more minute.',
            'Place the cheese on one side of the omelette and fold over the omelette into a half circle shape',
            'Let the cheese melt inside then serve'
        ],
        likes: 0
    },
    {
        recipeId: 5,
        name: 'Teriyaki Noodles',
        imgLink: '/images/recipeImages/Teriyaki-Chicken.jpg',
        time : 18,
        unit: 'Minutes',
        type: "vegetarian",
        ingredients: [
            {
                ingredientName: 'Udon Noodles',
                quantity: '16 oz'
            },
            {
                ingredientName: 'Sesame Oil',
                quantity: '1 Tbsp'
            },
            {
                ingredientName: 'Vegtable Oil',
                quantity: '1 Tbsp'
            },
            {
                ingredientName: 'Soy Sauce',
                quantity: '1/3 Cup'
            },
            {
                ingredientName: 'Sugar',
                quantity: '1 Tbsp'
            },
            {
                ingredientName: 'Mirin',
                quantity: '1 Tbsp'
            },
            {
                ingredientName: 'Garlic',
                quantity: '3 Cloves'
            }
        ],
        steps: [
            'Cook noodles according to the instructions on the packaging, drain, and set aside',
            'In a small bowl, combine soy sauce, mirin, and sugar. Mix until combined',
            'In a large pan or wok over medium high heat, add in sesame oil, vegetable oil, soy sauce mixture, and garlic. Cook for about 3 minutes, stirring occasionally.',
            'Add in noodles and toos to fully coat them in sauce. Serve immediately topped with sliced green onions and sesame seeds'
        ],
        likes: 0
    },
    {
        recipeId: 6,
        name: 'Chicken Broccoli Penne Pesto',
        imgLink: '/images/recipeImages/pesto-chicken.jpg', 
        time : 25,
        unit: 'Minutes',
        type: "chicken",
        ingredients: [
            {
                ingredientName: 'Penne Pasta',
                quantity: '12 oz'
            },
            {
                ingredientName: 'Chicken Breast (boneless)',
                quantity: '16 oz'
            },
            {
                ingredientName: 'Garlic',
                quantity: '2 Cloves'
            },
            {
                ingredientName: 'Basil',
                quantity: '2 Cups'
            },
            {
                ingredientName: 'Olive Oil',
                quantity: '1/2 Cup'
            },
            {
                ingredientName: 'Parmesean Cheese',
                quantity: '1/2 Cup'
            },
            {
                ingredientName: 'Broccoli',
                quantity: '3 Cups'
            }
        ],
        steps: [
            'Cut chicken into 1 inch cubes then set aside',
            'Make the pesto, use a blender to add together the basil, olive oil, garlic, 2tsp of the parmesean cheese, and salt and pepper to taste',
            'Bring water to a boil and cook the pasta for 11 minutes',
            'While water is boiling cook the chicken and broccoli in a skillet for 6 minutes',
            'When the pasta is done, add the pesto, pasta and broccoli to the chicken skillet and stir',
            'Add parmesean cheese to top and serve'
        ],
        likes: 0
    }
]

export default recipes;
