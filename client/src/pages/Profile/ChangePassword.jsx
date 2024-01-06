import './Layout.css'

function Profile() {
  return (
    <div className="bg">
        <div className="sign-in">
          <div className="sign-in-form">
            <h1>Change Password</h1>
            <form>
              <br />
              <input type="password" name="old-password" placeholder="Old Password" />
              <br />
              <input type="password" name="mobile" placeholder="New Password" />
              <br />
              <input type="password" name="mobile" placeholder="Confirm Password" />
            </form>
            <div className='btns'>
              <a href="">
                <input type="submit" value="Save Changes" className="sign-in-btn" />
              </a>
              
            </div>
          </div>
        </div>
  
        
    </div>
  )
}

export default Profile