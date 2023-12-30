import Premiering from "./Premiering.json"

function Premirering () {
  return (
    <main>
        <div className="premiering" id="explore">
          <h3>Premiering Now</h3>
          <div className="premiering-movies" >
            {Premiering.map((movie) => (
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
        </div>
    </main>
    
  )
}

export default Premirering 