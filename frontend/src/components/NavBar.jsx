import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { logout, currentuser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <img src="logo.png" className="w-20 h-20" />
        <Link className="navbar-brand mx-5 logo text-white" to="/">
          MyFlix
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {/* {
            currentuser && currentuser.id ? (
              <> */}
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/watchlist">
                    WatchList
                  </Link>
                </li>
                {/* {
                  currentuser && currentuser.is_admin? 
                  <> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/addmovie">
                      Add Movie
                    </Link>
                  </li>
                  {/* </>: " "
                } */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={() => logout()}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              {/* </>
            ) : ( */}
              <div className="absolute inset-y-0 right-0 flex gap-4 items-center">
                <Link to="/signup">
                  <button className="rounded-full border-2 border-white p-2 w-32 hover:bg-yellow-00 text-white">
                    Sign Up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="rounded-full border-2 border-white p-2 w-32 hover:bg-yellow-400  text-white">
                    LogIn
                  </button>
                </Link>
              </div>
            {/* )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
