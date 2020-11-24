export interface Ingredient{
    ingredientName: string;
    quantity: string;
}
export interface IRecipeData{
    recipeId: number;
    name: string;
    imgLink: string;
    recipeType: string; 
    time: number;
    unit: string;
    ingredients: ReadonlyArray<Ingredient>;
    steps: ReadonlyArray<string>;
}

export interface NewRecipeData{
    ingredients: Ingredient[];
    steps: string[];
}
