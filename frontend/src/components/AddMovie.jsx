import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

function AddMovie() {
  const { AddMovie } = useContext(MovieContext);

  const [backgroundImg, setbackgroundImg] = useState("");
  const [cardImg, setCardImg] = useState("");
  const [description, setDescription] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [title, setTitle] = useState("");
  const [titleImg, setTitleImg] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AddMovie(
      backgroundImg,
      cardImg,
      description,
      subTitle,
      title,
      titleImg,
      type
    );
    setbackgroundImg("");
    setCardImg("");
    setDescription("");
    setSubTitle("");
    setTitle("");
    setTitleImg("");
    setType("");
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="login template vh-100">
      <div
        className="p-5 rounded bg-white mx-3 mx-sm-1"
        style={{ width: "40%" }}
      >
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Add Movie</h3>

          <div className="mb-3">
            <label htmlFor="name">Background Image</label>
            <input
              type="text"
              placeholder="Add link for Background Image"
              className="form-control"
              onChange={(e) => setbackgroundImg(e.target.value)}
              value={backgroundImg}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description">CardImage</label>
            <input
              type="text"
              placeholder="Add Link For CardImage"
              className="form-control"
              onChange={(e) => setCardImg(e.target.value)}
              value={cardImg}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price">Description</label>
            <input
              type="text"
              placeholder="Add Description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image">SubTitle</label>
            <input
              type="text"
              placeholder="Add SubTitle"
              className="form-control"
              onChange={(e) => setSubTitle(e.target.value)}
              value={subTitle}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image">Title</label>
            <input
              type="text"
              placeholder="Add Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image">Title Image</label>
            <input
              type="text"
              placeholder="Add Title Image"
              className="form-control"
              onChange={(e) => setTitleImg(e.target.value)}
              value={titleImg}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="restaurant">Movie Type</label>
            <select
              className="form-control"
              onChange={handleTypeChange}
              value={type}
            >
              <option value="">Select a type</option>
              <option value="recommend">Recommend</option>
              <option value="new">New</option>
              <option value="trending">Trending</option>
              <option value="original">Original</option>
            </select>
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
