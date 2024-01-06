import './Home.css'; 
import ComingSoon from "./ComingSoon.json"

function Premirering () {
  return (
    <main>
        <div className="premiering" id="explore">
          <h3>Coming Soon</h3>
          <a href="/description">
          <div className="premiering-movies" >
            {ComingSoon.map((movie) => (
              <form action="" key={movie.id} >
                <div className="movie">
                  <input type="hidden" id="movieName" name="movieName" value={movie.title} />
                  <img src={`${movie.url}`} alt="movie-poster" />
                  <h4>{movie.title}</h4>
                  <h5>{movie.subtitle}</h5>
                  <br className="temp"/>
                  {/* <input type="submit" value="See More..." className="hidden-btn" /> */}
                </div>
              </form>
            ))}
          </div>
          </a>
        </div>
    </main>
    
  )
}

export default Premirering 