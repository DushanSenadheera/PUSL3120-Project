import "./Admin_UpcomingMovie.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Upcoming_Menu_List } from "../../helpers/Admin-Upcoming-Movie-List";
import MenuItem from "../../components/Admin-Movie-Items/Admin-Premiere-Item";
import { PiPlusCircleFill } from "react-icons/pi";

function Admin_Upcoming() {
  return (
    <>
      <Link className="Bottom-Right-Add-Button">
        <PiPlusCircleFill size={60} />
      </Link>
      <div className="Upcoming-Menu-List">
        {Upcoming_Menu_List.map((menuItem, key) => {
          return (
            <MenuItem key={key} image={menuItem.image} title={menuItem.title} />
          );
        })}
      </div>
    </>
  );
}

export default Admin_Upcoming;
