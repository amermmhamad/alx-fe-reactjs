import { useState } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import RecommendationsList from "./components/RecommendationsList";
import FavoritesList from "./components/FavoritesList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
