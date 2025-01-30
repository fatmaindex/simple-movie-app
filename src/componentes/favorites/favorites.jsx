import React from "react";
import "./favorites.css";

function Favorites({ favorites }) {
  return (
    <div className="favoritesContainer">
      <h2 className="heading">Favorites</h2>
      {favorites.length > 0 ? (
        <div className="moviesContainer">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="movieCard">
              <img
                src={
                  movie.Poster !== "null"
                    ? movie.Poster
                    : require("../../assets/no-image.webp")
                }
                alt="moviePoster"
                className="movieImage"
              />
              <h3 className="movieTitle">{movie.Title}</h3>
              <p className="movieYear">{movie.Year}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="noMoviesText">There is no favourit movies</p>
      )}
    </div>
  );
}

export default Favorites;
