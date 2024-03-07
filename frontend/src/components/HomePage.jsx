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