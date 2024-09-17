import Axios from "axios";
import { useState } from "react";
import "./app.css";
import RecipeTile from "./components/recipe-tile";
import SearchBar from "material-ui-search-bar";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };
  const set = (e) => {
    console.log(e);
    setquery(e);
  };
  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>{/* Food Recipe Plaza 🍔 */}</h1>
      {/* <form className="app__searchForm" onSubmit={onSubmit}> */}
      {/* <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" /> */}
      <SearchBar
        style={{ width: "20%", margin: " 0 auto ", border: "solid 2px " }}
        placeholder="Search Reciepe"
        value={query}
        onChange={(e) => set(e)}
        // onSubmit={(e) => onSubmit(e)}
      />
      <input
        className="app__submit"
        type="submit"
        value="Search"
        onClick={onSubmit}
      />{" "}
      {/* </form> */}
      {recipes !== [] && recipes.length !== 0 ? (
        <div className="app__recipes">
          {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
