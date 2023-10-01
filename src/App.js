import { React, useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "./App.scss";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("batman");

  const getMoviesRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apiKey=5fff3099`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
    console.log(responseJson);
  };

  useEffect(() => {
    getMoviesRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
