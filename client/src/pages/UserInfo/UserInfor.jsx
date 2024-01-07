import React, { useState, useEffect } from 'react';
import './UserInfo.css';

const UserInfo = () => {
  const [user, setUser] = useState({
    fName: '',
    lName: '',
    email: '',
    mobile: '',
    
  });

  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const response = await fetch('/currentuser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'), 
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error('Failed to fetch user data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the function
    fetchUserData();
  }, []); 

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
    if (confirmDelete) {
      try {
        const response = await fetch('/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'), // adjust as per your token storage method
          },
          body: JSON.stringify({ email: user.email }), // or however your API needs it
        });

        if (response.ok) {
          console.log('User deleted successfully');
          setUser({}); // Resetting user state
          // Redirect or further actions here
        } else {
          console.error('Failed to delete user:', response.status);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };


  return (
    <div className="user-info">
      <h2>User Information</h2>
      <div><strong>First Name:</strong> {user.fName}</div>
      <div><strong>Last Name:</strong> {user.lName}</div>
      <div><strong>Email:</strong> {user.email}</div>
      <div><strong>Mobile:</strong> {user.mobile}</div>
      {/* Delete Button */}
      <button className="delete-btn" onClick={handleDelete}>Delete Profile</button>
    </div>
  );
};

export default UserInfo;
