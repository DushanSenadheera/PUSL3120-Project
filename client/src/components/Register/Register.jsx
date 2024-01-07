import './register.css';
import axios from 'axios';

const Register = () => {

  const handleUserRegistration = (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log(data)
  
    axios.post('http://localhost:8000/sign', data)
      .then(res => {
        if (res.status === 200) {
          window.location.href = '/signIn';
        } else {
          alert('User registration failed');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="bg">
        <div className="sign-in">
          <div className="sign-in-form">
            <br />
            <h1>Register</h1>
            <form onSubmit={handleUserRegistration}>
              <div className="name">
                <input type="text" name="fName" placeholder="First Name" required />
                <input type="text" name="lName" placeholder="Last Name" required />
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
              <a href="/signin">Sign In</a> from here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;