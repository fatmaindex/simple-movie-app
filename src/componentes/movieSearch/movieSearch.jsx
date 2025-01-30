import React, { useState } from "react";
import "./movieSearch.css";
import Favorites from "../favorites/favorites";

const API_KEY = "6efcb2da";

function MovieSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  //function fetch the movies from the api
  const fetchMovies = async (query) => {
      //check if the user input is empty
    if (!query) {
      setMovies([]);
      return;
    }
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);

    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };
  //update the searchInput state with the searchInput value
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchInput(query);
    fetchMovies(query);
  };
  // Add the selected movie to fav movies array when click to the addToFavorite button
  const addToFavorites = (movie) => {
        // Check if the movie is not already in the favorites list
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Movie Search</h1>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="search for a movie..."
          value={searchInput}
          onChange={handleSearchChange}
          className="searchInput"
        />
      </div>

      <div className="moviesContainer">
        {/* Display the movies list if it is not empty */}
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movieCard">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.Title}
                className="movieImage"
              />
              <h3 className="movieTitle">{movie.Title}</h3>
              <p className="movieYear">{movie.Year}</p>
              <button
                onClick={() => addToFavorites(movie)}
                className="favoriteButton"
              >
                Add to Favorites
              </button>
            </div>
          ))
        ) : (
          <p className="noMoviesText">No movies available to display</p>
        )}
      </div>
      {/* Display the favorit movies list */}
      <Favorites favorites={favorites} />
    </div>
  );
}

export default MovieSearch;
