import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function WatchList() {
  const { selectedMovies, removefromwatchlist, deleteMovie } =
    useContext(MovieContext);

  if (selectedMovies.length === 0) {
    return <div>No foods selected</div>;
  }

  return (
    <div
      className="h-screen my-5"
      style={{ backgroundColor: "#FFC244FF", margin: "3%", height: "100vh" }}
    >
      <h2 className="text-center">My WatchList</h2>
      <div className=" row ">
        {selectedMovies &&
          selectedMovies.map((movie) => (
            <div key={movie.id} className="col-4 mb-3  mr-3 px-3">
              <div className="border bg-light overflow-hidden rounded">
                <img
                  src={movie.cardImg}
                  className="img-fluid mx-auto my-4"
                  alt="loading..."
                />
                <h5 style={{ textAlign: "center", fontWeight: "lighter" }}>
                  {movie.title}
                </h5>
                {/* style the movie details */}
                <div id="movie-details">
                  <p style={{ fontWeight: "lighter", fontSize: "13px" }}>
                    {" "}
                    {movie.subTitle}
                  </p>
                  <div className="flex justify-around mt-4">
                    <img
                      src="https://img.icons8.com/ios/50/null/minus.png"
                      onClick={() => removefromwatchlist(movie)}
                      className="remove-icon"
                    />
                    <img
                      src="https://img.icons8.com/color/48/null/delete-forever.png"
                      onClick={() => deleteMovie(movie.id)}
                      className="delete-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WatchList;
