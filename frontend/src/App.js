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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <MovieProvider>
          <Routes>
          <Route path="/" element={<RootLayout/>}>
          <Route index element={<Landing/>}/>
          <Route path="/home" element={ <Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/addmovie" element={<AddMovie/>}/>
          <Route path="/watchlist" element={<WatchList/>}/>
          <Route path="/movie/:id" element={<SingleMovie />} />
          </Route>
          </Routes>
          </MovieProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
