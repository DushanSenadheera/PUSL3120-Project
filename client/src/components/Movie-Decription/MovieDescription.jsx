import "./MovieDescription.css";
import Description from "./MovieDescription.json";
import { FaRegClock } from "react-icons/fa";

function MovieDescription() {
  return (
    <div className="background-poster">
      {Description.map((items) => (
        <div key={items.key}>
          <img src={items.image} alt="movie-banner" />
          <div className="movie-description">
            <div className="title">
              <h1>{items.title}</h1>
              <h4>{items.director}</h4>
            </div>
            <div className="categories"></div>
            <div className="duration">
              <i>
                <FaRegClock />
              </i>
              <p>{items.duration}</p>
            </div>
            <div className="cast">
              <h4>Cast</h4>
              <p>{items.cast}</p>
            </div>
            <div className="movie-details-title">
              <p>{items.description}</p>
            </div>
            <div className="cta-btns">
              {/* <div id="overlay">
              <iframe width="420" height="315" id="trailer" src=""></iframe>
            </div> */}
              <div className="cta">
                <a href="/seatbooking"><button className="btn-buy">Buy Ticket</button></a>
                <button className="btn-trailer">Watch Trailer</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieDescription;
