import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Payment from "../pages/Payment";
import { Seatbooking } from "../pages/Seatbooking/Seatbooking";
import Description from '../pages/Description';
import Profile from '../pages/Profile/Profile';
import Profile_Edit from '../pages/Profile/Profile-Edit';
import ChangePassword from '../pages/Profile/ChangePassword';
import BookingHistory from '../pages/Profile/BookingHistory';
import AdminSignIn from "../pages/Admin/AdminLogin";


function Users() {
  return (
    <BrowserRouter>
    <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/seatbooking" element={<Seatbooking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/description" element={<Description/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/profile-edit" element={<Profile_Edit/>} />
            <Route path="/changepassword" element={<ChangePassword/>} />
            <Route path="/bookinghistory" element={<BookingHistory/>} />
            <Route path="/adminlogin" element = {<AdminSignIn/>} />
          </Routes> 
    </BrowserRouter>
  )
}

export default Users