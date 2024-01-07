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
import AdminSignIn from "./components/AdminSignIn/AdminSignIn";
import Description from './pages/Description';
import Profile from './pages/Profile/Profile';
import Profile_Edit from './pages/Profile/Profile-Edit';
import ChangePassword from './pages/Profile/ChangePassword';
import BookingHistory from './pages/Profile/BookingHistory';
import Admin_Edit_Premiere from "./pages/Admin/Admin_Edit_PremiereMovies";
import Users from "./Routes/Users";
import Admin from "./Routes/Admin";
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  const shouldHideNavAndFooter = () => {
    const hiddenRoutes = ['/admin', '/upcoming']; // Add more routes if needed
    return hiddenRoutes.includes(window.location.pathname);
  };
  return (
    <div>

      <BrowserRouter>
        <main>
          {/* <Nav />
          <Routes>

       
     {!shouldHideNavAndFooter() && <Nav />}
    
          <Nav />
          
          <Users />
          <Admin />
          <Footer /> 
         
          {!shouldHideNavAndFooter() && <Footer />}

          {/* <Routes>

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

          </Routes>  */}


          </Routes> 
          

          <Routes>
            <Route path="/" element={<Admin_Layout />}>

              <Route path="dashboard" element={<Admin_Dashboard />} />
              <Route path="premiere" element={<Admin_Premiere />} />
              <Route path="bookings" element={<Admin_Booking />} />
              <Route path="upcoming" element={<Admin_Upcoming />} />
              <Route path="logout" element={<Admin_Logout />} />
              <Route path="adminlogin" element = {<AdminSignIn/>} />

              <Route path="/admin" element={<Admin_Dashboard />} />
              <Route path="/premiere" element={<Admin_Premiere />} />
              <Route path="/upcoming" element={<Admin_Upcoming />} />
              <Route path="/logout" element={<Admin_Logout />} />

              <Route path="/add_premiere_movie" element={<Premiere_Movie_Add/>} />
              <Route path="/add_upcoming_movie" element={<Upcoming_Movie_Add/>} />
              <Route path="/edit_premiere" element={<Admin_Edit_Premiere/>} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
      {/* <Footer />  */}

            </Route>
          </Routes>
        </main>
      </BrowserRouter> */}
      
      

    </div>
  );
}

export default App;
