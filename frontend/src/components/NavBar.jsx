import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { logout, currentuser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  return (
    <nav className="bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo and brand */}
          <div className="flex-shrink-0 flex items-center text-white">
            <img className="h-8 w-auto" src="logo.png" alt="MyFlix" />
            <span className="ml-2">MyFlix</span>
          </div>

          {/* Links */}
          {currentuser && currentuser ?  (
            <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {/* Home Link */}
              <Link
                to="/home"
                className="text-white hover:bg-amber-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                HOME
              </Link>
  
              {/* WatchList Link */}
              <Link
                to="/watchlist"
                className="text-white hover:bg-amber-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                WATCHLIST
              </Link>
  
              {/* Add Movie Link (for admins) */}
              {currentuser && currentuser.is_admin &&(
                <Link
                  to="/addmovie"
                  className="text-white hover:bg-amber-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  ADD MOVIE
                </Link>
              )}
            </div>
          </div>
          ) : 
         null
          }

          {/* Profile Dropdown */}
          {currentuser ? (
            <div className="ml-3 relative">
              <div>
                <button
                  onClick={toggleDropdown}
                  className="relative flex rounded-full bg-gray-800 p-1 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src={currentuser.profile_picture}
                    alt=""
                  />
                </button>
              </div>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    onClick={() => logout()}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                  <p className="block px-4 py-2 text-sm text-gray-700">
                    {currentuser.username}
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
