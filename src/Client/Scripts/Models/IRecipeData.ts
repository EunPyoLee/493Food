export interface Ingredient{
    ingredientName: string;
    quantity: string;
}
export interface IRecipeData{
    recipeId: number;
    name: string;
    imgLink: string;
    time: number;
    unit: string;
    type: string;
    ingredients: ReadonlyArray<Ingredient>;
    steps: ReadonlyArray<string>;
    likes: number;
}

export interface NewRecipeData{
    ingredients: Ingredient[];
    steps: string[];
}

