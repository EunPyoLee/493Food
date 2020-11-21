export interface Ingredient{
    ingredientName: string;
    quantity: string;
}
export interface IRecipeData{
    name: string;
    imgLink: string;
    time: number;
    unit: string;
    ingredients: ReadonlyArray<Ingredient>;
    steps: ReadonlyArray<string>;
}