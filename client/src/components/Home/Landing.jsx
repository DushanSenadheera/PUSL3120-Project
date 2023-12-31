import './Home.css'; 


const Landing = () => {
  return (
    <main>
      <div className="landing" id="home">
      <div className="landing-content"></div>
      <div className="landing-text">
        <h1>
          Feel the <span>Next</span> <br />
          level <span>Movie</span> Experience
        </h1>
        <a href="#explore">
          <button className="explore-btn">Explore</button>
        </a>
        <a href="#explore">
          <button className="buy-ticket-btn">Buy Tickets</button>
        </a>
        <form action="movieDescription.jsp" method="get" name="search-bar">
          <input type="search" name="search" id="search" placeholder="Search..." className="search-bar" />
        </form>
      </div>
      <div className="landing-vid">
        <video src="../src/assets/Official Trailer_1.mp4" autoPlay muted loop></video>
      </div>
    </div>
    </main>
  );
};

export default Landing;
