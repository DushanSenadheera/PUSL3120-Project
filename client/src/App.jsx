import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Admin_Booking from "./pages/Admin/Admin_Bookings";
import Admin_Dashboard from "./pages/Admin/Admin_Dashboard";
import Admin_Layout from "./pages/Admin/Admin_Layout";
import Admin_Premiere from "./pages/Admin/Admin_PremiereMovie";
import Admin_Upcoming from "./pages/Admin/Admin_UpcomingMovie";
import Admin_Logout from "./pages/Admin/Admin_Logout";
import Payment from "./pages/Payment";
import { Seatbooking } from "./pages/Seatbooking/Seatbooking";
import Description from './pages/Description'

function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/siginin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/seatbooking" element={<Seatbooking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/description" element={<Description/>} />
          </Routes> 

          <Routes>
            <Route path="/" element={<Admin_Layout />}>
              <Route index element={<Admin_Dashboard />} />
              <Route path="premiere" element={<Admin_Premiere />} />
              <Route path="bookings" element={<Admin_Booking />} />
              <Route path="upcoming" element={<Admin_Upcoming />} />
              <Route path="logout" element={<Admin_Logout />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
      <Footer /> 
    </div>
  );
}

export default App;
