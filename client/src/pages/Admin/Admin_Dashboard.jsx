import "./Admin_Dashboard.css";
import Admin_Movie_Table from "../../components/Admin-Dashboard/Admin_Booking_Table";
import Admin_Booking_Data from "../../helpers/Admin_Booking_Data";

function Admin_Dashboard() {
  return (
    <div className="Admin_Booking_Page">
      <h3>Booking History</h3>
      <br />
      <Admin_Movie_Table data={Admin_Booking_Data} />
    </div>
  );
}

export default Admin_Dashboard;
