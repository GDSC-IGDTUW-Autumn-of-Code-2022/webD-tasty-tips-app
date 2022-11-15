import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Recipe from "./Recipe";

function App() {
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  const APP_ID = "d7811cd0";
  const APP_KEY = "3baec572c48af715772e8deac52d7572";

  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.hits);
        //console.log(data);
      });
  };

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("bread");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <h1 className="heading">Tasty Tips</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearch}
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        {recipes.slice(0, visible).map((r) => (
          <Recipe
            key={r.recipe.url}
            title={r.recipe.label}
            calories={r.recipe.calories}
            img={r.recipe.image}
            url={r.recipe.url}
            ingredients={r.recipe.ingredients}
          />
        ))}
      </div>
      <div className="button-container">
        <button className="loadMoreButton" onClick={showMoreItems}>
          Load More Recipes
        </button>
      </div>
    </div>
  );
}

export default App;
