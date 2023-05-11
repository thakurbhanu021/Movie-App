import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="col d-flex justify-content-start m-2 mb-3">
          <img src={movie.Poster} alt="movie" width='190px' height='250px'/>
        </div>
      ))}
    </>
  );
};

export default MovieList;
