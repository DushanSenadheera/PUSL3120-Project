import './register.css';

const Register = () => {
  return (
    <>
      <div className="bg">
        <div className="sign-in">
          <div className="sign-in-form">
            <h1>Register</h1>
            <form action="register" method="POST">
              <div className="name">
                <input type="text" name="fname" placeholder="First Name" required />
                <input type="text" name="lname" placeholder="Last Name" required />
              </div>
              <br />
              <input type="email" name="email" placeholder="Email" required />
              <br />
              <input type="password" name="password" placeholder="Password" required />
              <br />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
              <br />
              <input type="tel" name="mobile" placeholder="Mobile" required />
              <br />
              <input type="submit" value="Register" className="sign-in-btn" />
            </form>
            <p className='login-text'>
              Already have an account?
              <br />
              <a href="signIn.jsp">Sign In</a> from here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
