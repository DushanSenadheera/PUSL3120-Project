function ComingSoon() {
  return (
    <main>
        <div className="coming-soon">
          <h3>Coming Soon</h3>
          <div className="premiering-movies">
            
              <form action="movieDescriptionUp.jsp">
                <input type="hidden" id="movieNameUp" name="movieNameUp" />
                <div className="movie">
                  <img src="" alt="movie-image" />
                  <h4>Movie Title</h4>
                  <input type="submit" value="See More..." className="hidden-btn" />
                </div>
              </form>
        
          </div>
        </div>
    </main>
  )
}

export default ComingSoon