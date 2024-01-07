import './Layout.css'

function Profile() {
  return (
    <div className="bg">
        <div className="sign-in">
          <div className="sign-in-form">
            <br />
            <h1>Edit Profile</h1>
            <form>
              <div className="name">
                <input type="text" name="fname" value="Jhon" placeholder="First Name" disabled />
                <input type="text" name="lname" value="Doe" placeholder="Last Name" disabled />
              </div>
              <br />
              <input type="email" name="email" value="jhon@gmail.com" placeholder="Email" disabled />
              <br />
              <input type="tel" name="mobile" value="0713112927" placeholder="Mobile" />
            </form>
            <div className='btns'>
              <a href="/profile">
                <input type="submit" value="Update Profile" className="sign-in-btn" />
              </a>
              <br />
              <a href="/changepassword">
                <input type="submit" value="Change Password" className="del-acc-btn" />
              </a>
              <br />
              <a href="">
                <input type="submit" value="Delete Account" className="del-acc-btn" />
              </a>
            </div>
          </div>
        </div>
  
        
    </div>
  )
  
}

export default Profile