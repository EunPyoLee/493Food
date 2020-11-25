import {IRecipeData} from './IRecipeData';
export default interface IFilterOptions{
    typeOption: string;
    timeOption: number;
    searchText: string;
    filteredRecipe: ReadonlyArray<IRecipeData>;
}
