import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Rate from "./Rate";
import AddReview from "./AddReview";

function SingleMovie() {
  const nav = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null); // Initialize movie state with null
  const [showPopup, setShowPopup] = useState(false); // State for controlling the popup

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((res) => res.json())
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]); // Include id in the dependency array

  const goBack = () => {
    nav(-1);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="m-5 relative">
      {movie ? (
        <div key={movie.id} className="relative">
          <img
            src="https://img.icons8.com/ultraviolet/40/null/circled-left.png"
            onClick={goBack}
            className="back-icon absolute top-0 left-0 z-10"
          />
          <img
            src={movie.backgroundImg}
            className="img-fluid relative w-full"
            alt="loading..."
          />
          <div className="absolute top-60 left-0 z-10 p-4 text-white">
            <h5 className="text-3xl italic">{movie.title}</h5>
            <p className="description max-w-md text-l font-medium">
              {movie.description}
            </p>
            <p className="text-amber-500">{movie.subTitle}</p>
            <div className="buttons">
              <button className="btn text-amber-500">WATCH NOW</button>
              <button className="btn text-amber-500">WATCH TRAILER</button>
            </div>
            <Rate />
          </div>

          <div className="absolute bottom-0 left-0 p-4 bg-black w-full text-white">
            <h5>Reviews</h5>
            {movie.reviews && movie.reviews.length > 0 ? (
              movie.reviews.map((review) => (
                <div key={review.id}>
                  <p>
                    {review.comment}
                    <br />
                    {review.username}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}

            <button onClick={togglePopup} className="btn text-amber-500 ">
              Add Review
            </button>
            {showPopup && <AddReview onClose={togglePopup} movie_id={movie.id}/>}
          </div>
        </div>
      ) : (
        <p>Loading Movie details...</p>
      )}
    </div>
  );
}

export default SingleMovie;
