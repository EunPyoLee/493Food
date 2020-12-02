import {Ingredient} from './IRecipeData';

export let list: Ingredient[] = [];
export interface IGroceryList{
    items: Array<Ingredient>;
}

type AddItem = (list: Array<Ingredient>) => void;
