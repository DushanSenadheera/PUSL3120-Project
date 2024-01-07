import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin_Dashboard from "../pages/Admin/Admin_Dashboard";
import Admin_Layout from "../pages/Admin/Admin_Layout";
import Admin_Premiere from "../pages/Admin/Admin_PremiereMovie";
import Admin_Upcoming from "../pages/Admin/Admin_UpcomingMovie";
import Admin_Logout from "../pages/Admin/Admin_Logout";

import Premiere_Movie_Add from "/src/components/Admin-Premiere-Movie-Add/Premiere_Movie_Add";
import Upcoming_Movie_Add from "/src/components/Admin-Upcoming-Movie-Add/Upcoming_Movie_Add";
import Admin_Edit_Premiere from "/src/pages/Admin/Admin_Edit_PremiereMovies";
import Admin_Edit_Upcoming from "/src/pages/Admin/Admin_Edit_UpcomingMovies";

function Admin() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Admin_Layout />}>
              <Route path="/admin" element={<Admin_Dashboard />} />
              <Route path="/premiere" element={<Admin_Premiere />} />
              <Route path="/upcoming" element={<Admin_Upcoming />} />
              <Route path="/logout" element={<Admin_Logout />} />
              
              <Route path="/add_premiere_movie" element={<Premiere_Movie_Add/>} />
              <Route path="/add_upcoming_movie" element={<Upcoming_Movie_Add/>} />
              <Route path="/edit_premiere" element={<Admin_Edit_Premiere/>} />
              <Route path="/edit_upcoming" element={<Admin_Edit_Upcoming/>} />
              
          

              {/* <Route path="/adminlogin" element = {<AdminSignIn/>} /> */}
            </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default Admin