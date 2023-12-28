// Importing Dependencies and CSS
import React from 'react';
import Nav from '../Nav/Nav';
import './signin.css';

// Functional component for Sign In
const SignIn = () => {
  return (
    <>
      {/* Header */}
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="styles/signIn.css" />
        <title>ABC Cinema | Sign In</title>
      </head>

      {/* Body */}
      <body>
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <div className="bg">
          <div className="sign-in">
            <div className="sign-in-form">
              <h1>Sign In</h1>
              <form action="signIn" method="POST">
                <input type="text" name="email" placeholder="Email" required />
                <br />
                <input type="password" name="password" placeholder="Password" required />
                <br />
                <input type="submit" value="Sign In" className="sign-in-btn" />
              </form>
              <p className='register-text'>
                Don't have an account?
                <br />
                <a href="register.jsp">Register</a> from here
              </p>
            </div>
          </div>
        </div>

        {/* Footer Component */}
        <Footer />
      </body>
    </>
  );
};

// Navbar Component
const Navbar = () => {

  return (
    <div>
      <Nav />
    </div>
  );
};

// Footer Component
const Footer = () => {

  return (
    <div>
      {/* Footer JSX */}
    </div>
  );
};

export default SignIn;
