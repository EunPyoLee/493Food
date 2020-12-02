import {Ingredient} from './IRecipeData'

export interface NewRecipeData {
    ingredients: Ingredient[];
    steps: string[];
}

export interface NewRecipeInput {
   nameInput: string;
   timeInput: number;
   unitInput: string;
   typeInput: string;
   imgInput: string;
   ingredientInput: string;
   quantityInput: string;
   stepInput:string;
}

export interface RecipeToAdd {
  recipeId: number;
  name: string;
  imgLink: string;
  time: number;
  unit: string;
  type: string;
  ingredients: Ingredient[];
  steps: string[];
  likes: number;
}
