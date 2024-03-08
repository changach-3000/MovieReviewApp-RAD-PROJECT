import {BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./AuthPages/Login";
import SignUp from "./AuthPages/SignUp";
import Landing from "./components/Landing";
import RootLayout from "./Layout/RootLayout";
import AddMovie from "./components/AddMovie";
import { MovieProvider } from "./context/MovieContext";
import Homepage from "./components/HomePage";
import WatchList from "./components/WatchList";
import SingleMovie from "./components/SingleMovie";
import AddReview from "./components/AddReview";
import { ReviewProvider } from "./context/ReviewContext";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <MovieProvider>
            <ReviewProvider>
          <Routes>
          <Route path="/" element={<RootLayout/>}>
          <Route index element={<Landing/>}/>
          <Route path="/home" element={ <Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/addmovie" element={<AddMovie/>}/>
          <Route path="/watchlist" element={<WatchList/>}/>
          <Route path="/addreview" element={<AddReview/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/movie/:id" element={<SingleMovie />} />
          </Route>
          </Routes>
          </ReviewProvider>
          </MovieProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
