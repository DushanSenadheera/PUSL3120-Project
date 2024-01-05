import { Outlet, Link, NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function MenuItem({ title, image }) {
  return (
    <div className="menuItem">
      <div className="Premiere-Movies-Card">
        <div className="Image-Container">
          <div
            className="background-Image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="Premiere-Movie-Title">
          <h3>{title}</h3>
        </div>
        <div className="Premiere-Movie-Edit-Section">
          <div className="Upload-Date-Left">
            <p>Yesterday</p>
          </div>
          <div className="Edit-Delete-Right">
            <Link>
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
