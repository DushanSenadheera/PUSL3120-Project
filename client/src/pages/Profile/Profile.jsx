import './Layout.css'

function Profile() {
  return (
    <div className="bg">
        <div className="sign-in">
          <div className="sign-in-form">
            <h1>Your Profile</h1>
            <form>
              <div className="name">
                <input type="text" name="fname" value="Ashan" placeholder="First Name" disabled />
                <input type="text" name="lname" value="Herath" placeholder="Last Name" disabled />
              </div>
              <br />
              <input type="email" name="email" value="ashandimanthalk@gmail.com" placeholder="Email" disabled />
              <br />
              <input type="tel" name="mobile" value="0713112927" placeholder="Mobile" disabled />
            </form>
            <div className='btns'>
              <a href="/bookinghistory">
                <input type="submit" value="Seat Booking History" className="sign-in-btn" />
              </a>
              <br />
              <a href="/profile-edit">
                <input type="submit" value="Edit Profile" className="del-acc-btn" />
              </a>
            </div>
          </div>
        </div>
  )
        
    </div>
  )
}

export default Profile