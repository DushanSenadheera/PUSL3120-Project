// Importing Dependencies and CSS
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
                Don&apos;t have an account?
                <br />
                <a href="register.jsp">Register</a> from here
              </p>
            </div>
          </div>
        </div>

      </body>
    </>
  );
};



export default SignIn;
