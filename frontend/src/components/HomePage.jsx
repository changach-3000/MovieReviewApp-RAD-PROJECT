import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { AuthContext } from "../context/AuthContext";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

function Homepage() {
  const { movies, Addtowatchlist, deleteMovie } = useContext(MovieContext);
  const { currentuser } = useContext(AuthContext);

  const groupedProducts = {};
  // eslint-disable-next-line array-callback-return
  movies &&
    movies.map((movie) => {
      if (groupedProducts[movie.type]) {
        groupedProducts[movie.type].push(movie);
      } else {
        groupedProducts[movie.type] = [movie];
      }
    });
  return (
    <>
    <Carousel />
    <div className="container mt-5 mb-5 bg-amber-500">
      {Object.keys(groupedProducts).map((type) => (
        <div key={type} className="category-container">
          <h3
            className="category-title py-3"
            style={{ color: "black" }}
          >
            {type}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {groupedProducts[type].map((movie) => (
              <div key={movie.id} className="bg-white rounded-md shadow-md p-4">
                <div className="text-center">
                <Link to={`/movie/${movie.id}`}> <img
                    src={movie.cardImg}
                    className="h-48 mx-auto"
                    alt="loading..."
                  /></Link>
                </div>
                <h5 className="text-center font-light">
                  {movie.title.toUpperCase()}
                </h5>
                <p className="text-center text-sm font-light">
                  {movie.subTitle}
                </p>
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

export default Homepage;
