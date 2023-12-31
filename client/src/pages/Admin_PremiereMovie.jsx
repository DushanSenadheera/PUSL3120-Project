import Premiere_Movie_Img from "../assets/Avatar.jpg";

function Admin_Premiere() {
  return (
    <div className="Premiere-Movies">
      <div class="movie">
        <img
          src={Premiere_Movie_Img}
          alt="Movie"
          className="Premiere-Movie-Imgs"
        />
        <h2>Avatar 2</h2>
        <div class="premiere-movie-actions">
          <p>Yesterday</p>
          <div class="icons"></div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Premiere;
