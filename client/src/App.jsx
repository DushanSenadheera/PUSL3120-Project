import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Admin_Dashboard from "./pages/Admin/Admin_Dashboard";
import Admin_Layout from "./pages/Admin/Admin_Layout";
import Admin_Premiere from "./pages/Admin/Admin_PremiereMovie";
import Admin_Upcoming from "./pages/Admin/Admin_UpcomingMovie";
import Admin_Logout from "./pages/Admin/Admin_Logout";
import Payment from "./pages/Payment";
import { Seatbooking } from "./pages/Seatbooking/Seatbooking";
import Description from './pages/Description'
import Premiere_Movie_Add from "./components/Admin-Premiere-Movie-Add/Premiere_Movie_Add";
import Upcoming_Movie_Add from "./components/Admin-Upcoming-Movie-Add/Upcoming_Movie_Add";
import Profile from './pages/Profile/Profile';
import Profile_Edit from './pages/Profile/Profile-Edit';
import ChangePassword from './pages/Profile/ChangePassword';
import BookingHistory from './pages/Profile/BookingHistory';


function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
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
          </Routes> 

          <Routes>
            <Route path="/" element={<Admin_Layout />}>
              <Route index element={<Admin_Dashboard />} />
              <Route path="/premiere" element={<Admin_Premiere />} />
              <Route path="/upcoming" element={<Admin_Upcoming />} />
              <Route path="/logout" element={<Admin_Logout />} />
              <Route path="/add_premiere_movie" element={<Premiere_Movie_Add/>} />
              <Route path="/add_upcoming_movie" element={<Upcoming_Movie_Add/>} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
      <Footer /> 
    </div>
  );
}

export default App;
