import React from "react";
const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        return (
          <div className="col">
            <img src={movie.Poster} alt={movies.Title} />
          </div>
        );
      })}
    </>
  );
};
export default MovieList;
