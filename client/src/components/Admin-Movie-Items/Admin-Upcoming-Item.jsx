import { Outlet, Link, NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function MenuItem({ title, image }) {
  return (
    <div className="menuItem">
      <div className="Upcoming-Movies-Card">
        <div className="Image-Container">
          <div
            className="background-Image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="Upcoming-Movie-Title">
          <h3>{title}</h3>
        </div>
        <div className="Upcoming-Movie-Edit-Section">
          <div className="Upload-Date-Left">
            <p>Yesterday</p>
          </div>
          <div className="Edit-Delete-Right">
            <Link to = "/edit_upcoming">
              <FaEdit />
            </Link>
            <Link>
              <MdDelete />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
