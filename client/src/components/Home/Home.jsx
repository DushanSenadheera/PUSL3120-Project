// import React, { useEffect, useState } from 'react';
import './Home.css'; // Import your CSS file

const App = () => {
//   // React state to store movie data
//   const [premieringMovies, setPremieringMovies] = useState([]);
//   const [upcomingMovies, setUpcomingMovies] = useState([]);

//   // Fetch data from your API or backend on component mount
//   useEffect(() => {
//     // Example of fetching data using fetch or axios
//     const fetchPremieringMovies = async () => {
//       try {
//         const response = await fetch('/api/premiering-movies'); // Replace with your API endpoint
//         const data = await response.json();
//         setPremieringMovies(data);
//       } catch (error) {
//         console.error('Error fetching premiering movies:', error);
//       }
//     };

//     const fetchUpcomingMovies = async () => {
//       try {
//         const response = await fetch('/api/upcoming-movies'); // Replace with your API endpoint
//         const data = await response.json();
//         setUpcomingMovies(data);
//       } catch (error) {
//         console.error('Error fetching upcoming movies:', error);
//       }
//     };

//     fetchPremieringMovies();
//     fetchUpcomingMovies();
//   }, []);

  return (
    <div>
      {/* Navbar Component */}
      {/* You can create a Navbar component and import it here */}
      {/* Example: <Navbar /> */}

      <main>
        

        {/* Slideshow Container */}
        {/* ... (Your existing code for slideshow container) */}

        {/* Premiering Movies Section */}
        <div className="premiering" id="explore">
          <h3>Premiere Now</h3>
          <div className="premiering-movies">
            
              <form action="movieDescriptionClick.jsp">
                <div className="movie">
                  <input type="hidden" id="movieName" name="movieName" />
                  <img src="" alt="movie-image" />
                  <h4>Movie Title</h4>
                  <input type="submit" value="See More..." className="hidden-btn" />
                </div>
              </form>
           
          </div>
        </div>

        {/* Coming Soon Section */}
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

        {/* Slideshow Container for Movies */}
        {/* ... (Your existing code for the second slideshow container) */}

        {/* About Us Section */}
        {/* ... (Your existing code for the about us section) */}

        {/* Contact Us Section */}
        {/* ... (Your existing code for the contact us section) */}
      </main>

      {/* Footer Component */}
      {/* You can create a Footer component and import it here */}
      {/* Example: <Footer /> */}

      {/* Scripts */}
      <script src="scripts/bannerSlider.js"></script>
    </div>
  );
};

export default App;
