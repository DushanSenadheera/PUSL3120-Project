import { useState, useEffect } from 'react';
import axios from 'axios';
import './Layout.css'

function Profile() {

  const [profile, setProfile] = useState(
    { fName: '', lName: '', email: '', mobile: '' }
  );
  const user = localStorage.getItem('user');

  useEffect(() => {
    axios.post('http://localhost:8000/profile', {user})
    .then(response => {
      setProfile(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []); 

  return (
    <div className="bg">
      <div className="sign-in">
        <div className="sign-in-form">
          <h1>Your Profile</h1>
          <form>
            <div className="name">
              <input type="text" name="fname" value="" disabled />
              <input type="text" name="lname" value={profile.lName} placeholder="Last Name" disabled />
            </div>
            <br />
            <input type="email" name="email" value={profile.email} placeholder="Email" disabled />
            <br />
            <input type="tel" name="mobile" value={profile.mobile} placeholder="Mobile" disabled />
          </form>
          <div className='btns'>
            <a href="">
              <input type="submit" value="Seat Booking History" className="sign-in-btn" />
            </a>
            <br />
            <a href="">
              <input type="submit" value="Profile Settings" className="del-acc-btn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile