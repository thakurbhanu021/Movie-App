import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3 p-0">
          <img src={movie.Poster} alt="movie" />
          <div onClick={()=>props.handleFavouriteClick(movie)} className="overlay d-flex justify-content-center align-items-center">
            <FavouriteComponent/>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
