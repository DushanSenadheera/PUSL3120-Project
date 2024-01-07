import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin_Dashboard from "../pages/Admin/Admin_Dashboard";
import Admin_Layout from "../pages/Admin/Admin_Layout";
import Admin_Premiere from "../pages/Admin/Admin_PremiereMovie";
import Admin_Upcoming from "../pages/Admin/Admin_UpcomingMovie";
import Admin_Logout from "../pages/Admin/Admin_Logout";



function Admin() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Admin_Layout />}>
              <Route path="/admin" element={<Admin_Dashboard />} />
              <Route path="/premiere" element={<Admin_Premiere />} />
              <Route path="/upcoming" element={<Admin_Upcoming />} />
              <Route path="/logout" element={<Admin_Logout />} />
              {/* <Route path="/adminlogin" element = {<AdminSignIn/>} /> */}
            </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default Admin