import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  favorites: [], // List of recipe IDs that the user has favorited
  recommendations: [], // List of recommended recipes

  // Add a recipe to the favorites list
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Remove a recipe from the favorites list
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations based on user's favorite recipes (basic example)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Add a recipe to the list
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Initialize or set recipes
  setRecipes: (recipes) =>
    set({
      recipes: recipes,
    }),
}));

export default useRecipeStore;
