import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container col d-flex justify-content-start m-2 mb-3">
          <img src={movie.Poster} alt="movie" width='190px' height='250px'/>
          <div className="overlay d-flex justify-content-center align-items-center">
            <FavouriteComponent/>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
