// Import necessary React modules and CSS file
import React from 'react';
import './signin.css';

// Create a functional component for Sign In
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
        {/* Include Navbar Component */}
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
              <p>
                Don't have an account?
                <br />
                <a href="register.jsp">Register</a> from here
              </p>
            </div>
          </div>
        </div>

        {/* Include Footer Component */}
        <Footer />
      </body>
    </>
  );
};

// Navbar Component
const Navbar = () => {
  // Implement your Navbar component JSX here
  return (
    <div>
      {/* Navbar JSX */}
    </div>
  );
};

// Footer Component
const Footer = () => {
  // Implement your Footer component JSX here
  return (
    <div>
      {/* Footer JSX */}
    </div>
  );
};

export default SignIn;
