import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router";
import { signInWithGoogle, logout } from "../../lib/auth";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";

function Navbar() {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser); 
    });
    return () => unsubscribe();
  }, []);
  
  useEffect(() => {
  setShowDropdown(false);
}, [user]);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-text">
              Lend<span className="logo-highlight">Mate</span>
            </span>
          </a>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-links">
            <li>
              <NavLink to="/option">Get Started</NavLink>
            </li>
          </ul>
 
          <div className="navbar-buttons">
            {user ? (
              <div className="user-info" style={{ position: "relative" }}>
                <img
                  src={user.photoURL ? user.photoURL : "/review-img1.png"}
                  alt="profile" 
                  className="user-avatar" 
                  style={{
                    borderRadius: "50%",
                    cursor: "pointer",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={handleAvatarClick} 
                />
                {showDropdown && (
                  <div
                    className="dropdown-content"
                    style={{
                      position: "absolute",
                      top: "50px",
                      right: 0,
                      background: "#fff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      borderRadius: "8px",
                      padding: "10px",
                      zIndex: 10,
                    }}
                  >
                    <button
                      className="btn btn-outline"
                      onClick={logout}
                      style={{ marginTop: "8px" }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="btn btn-outline" onClick={signInWithGoogle}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
