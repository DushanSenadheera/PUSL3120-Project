import React from 'react';
import './Nav.css'; 

function Navbar() {
  const user = "John Doe"; 

  return (
    <header>
      <nav>
        <div className="mobile-nav-header">
          <a href="/"><img src="../src/assets/logo header.png" alt="header logo" className="logo" /></a>
          <img src="./assets/menu.png" alt="mobile menu" id="mobile-menu" />
        </div>
        <ul id="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/#explore">Explore</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/#contact">Contact</a></li>
          {user != null ? (
            <li id="user-mobile"><a href="/profile"><i className="far fa-user"></i> {user}</a></li>
          ) : (
            <li><a href="/signIn"><button className="sign-up-btn" id="sign-up-btn-nav">Sign In</button></a></li>
          )}
        </ul>
        {user != null ? (
          <span id="user-web"><a href="/profile"><i className="far fa-user"></i> {user}</a></span>
        ) : (
          <a href="/signIn"><button className="sign-up-btn" id="sign-up-btn">Sign In</button></a>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
