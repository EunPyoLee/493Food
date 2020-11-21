interface Ingredient{
    ingredientName: string;
    quantity: string;
}
export default interface IRecipeData{
    name: string;
    imgLink: string;
    time: number;
    unit: string;
    ingredients: ReadonlyArray<Ingredient>;
    steps: ReadonlyArray<string>;
}