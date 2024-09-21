import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  searchTerm: "", // Search term for filtering
  filteredRecipes: [], // List of filtered recipes

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], // Ensure it's updated for filtered recipes
    })),

  // Update the search term
  setSearchTerm: (term) =>
    set((state) => {
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase())
        ),
      };
    }),

  // Initialize or set recipes
  setRecipes: (recipes) =>
    set({
      recipes: recipes,
      filteredRecipes: recipes, // Show all recipes by default
    }),
}));

export default useRecipeStore;
