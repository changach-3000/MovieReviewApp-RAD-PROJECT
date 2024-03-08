// Importing necessary dependencies and components from React and other modules
import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { AuthContext } from "../context/AuthContext";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

// Functional component definition for the Homepage
function Homepage() {
  // Destructuring values from the MovieContext using the useContext hook
  const { movies, Addtowatchlist, deleteMovie } = useContext(MovieContext);
  // Destructuring values from the AuthContext using the useContext hook
  const { currentuser } = useContext(AuthContext);

  // Object to group movies by their 'type' property
  const groupedProducts = {};
  // Mapping through movies to group them by type
  // eslint-disable-next-line array-callback-return
  movies &&
  movies.map((movie) => {
    if (groupedProducts[movie.type]) {
      groupedProducts[movie.type].push(movie);
    } else {
      groupedProducts[movie.type] = [movie];
    }
  });

// Returning the JSX for the Homepage component
return (
  <>
    {/* Rendering the Carousel component */}
    <Carousel />
    {/* Main container div for the homepage */}
    <div className="container mt-5 mb-5 bg-amber-500">
      {/* Mapping through the keys of groupedProducts object (movie types) */}
      {Object.keys(groupedProducts).map((type) => (
        // Container for each movie category
        <div key={type} className="category-container">
          {/* Title for the movie category */}
          <h3 className="category-title py-3" style={{ color: "black" }}>
            {type}
          </h3>
          {/* Grid layout for displaying movies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Mapping through movies of a specific type */}
            {groupedProducts[type].map((movie) => (
              // Container for each movie item
              <div key={movie.id} className="bg-white rounded-md shadow-md p-4">
                {/* Image of the movie with a link to its details page */}
                <div className="text-center">
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={movie.cardImg}
                      className="h-48 mx-auto"
                      alt="loading..."
                    />
                  </Link>
                </div>
                {/* Movie title */}
                <h5 className="text-center font-light">
                  {movie.title.toUpperCase()}
                </h5>
                {/* Movie subtitle */}
                <p className="text-center text-sm font-light">
                  {movie.subTitle}
                </p>
                {/* Buttons for adding to watchlist and deleting (if user is an admin) */}
                <div className="flex justify-between mt-4">
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => Addtowatchlist(movie)}
                  >
                    Add to Watchlist
                  </button>
                  {
                  currentuser && currentuser.is_admin? 
                  <>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => {
                        deleteMovie(movie.id);
                      }}
                    >
                      Delete
                    </button>
                    </>: " "
                }
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);
}

// Exporting the Homepage component as the default export
export default Homepage;