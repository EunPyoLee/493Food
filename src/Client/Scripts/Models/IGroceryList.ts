import {ListIngredient} from './IRecipeData';

export let list: ListIngredient[] = [];
export interface IGroceryList{
    items: Array<ListIngredient>;
}

type AddItem = (list: Array<ListIngredient>) => void;
