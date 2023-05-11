import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import AddFavourite from "./Components/AddFavourite";

function App() {
  const [movies, setMovies] = useState([]);
  const [favouriteMovie, setFavouriteMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (value) => {
    const url = `http://www.omdbapi.com/?s=${value}&apikey=a831a238`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const AddToFavourite = (movie) => {
    const FavouriteMovie = [...favouriteMovie, movie];
    setFavouriteMovie(FavouriteMovie);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-3">
        <MovieListHeading heading="MoviesXYZ.com" />
        <SearchBox value={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row mx-2">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourite}
          handleFavouriteClick={AddToFavourite}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-3">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row mx-2">
        <MovieList
          movies={favouriteMovie}
          favouriteComponent={AddFavourite}
          handleFavouriteClick={AddToFavourite}
        />
      </div>
    </div>
  );
}

export default App;
