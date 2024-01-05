import "./Admin_PremiereMovie.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Premiere_Menu_List } from "../helpers/Admin-Premiere-Movie-List";
import MenuItem from "../components/Admin-Movie-Items/Admin-Premiere-Item";
import { PiPlusCircleFill } from "react-icons/pi";

function Admin_Premiere_Movie() {
  return (
    <>
      <Link className="Bottom-Right-Add-Button">
        <PiPlusCircleFill size={60} />
      </Link>
      <div className="Bottom-Right-Add-Button-Background"></div>
      <div className="Premiere-Menu-List">
        {Premiere_Menu_List.map((menuItem, key) => {
          return (
            <MenuItem key={key} image={menuItem.image} title={menuItem.title} />
          );
        })}
      </div>
    </>
  );
}

export default Admin_Premiere_Movie;
