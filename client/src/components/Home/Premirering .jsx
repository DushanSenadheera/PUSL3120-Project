import { useEffect, useState } from 'react';
import './Home.css'; 
import Premiering from "./Premiering.json"
import axios from 'axios';

function Premirering () {

  const [premire, setPremire] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/premire')
    .then(response => {
      setPremire(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []); 

  return (
    <main>
        <div className="premiering" id="explore">
          <h3>Premiering Now</h3>
          <div className="premiering-movies" >
            {premire.map((data) => (
              <form action="" key={data.id} >
                <div className="movie">
                
                  <img src={`../../server/uploads/${data.poster}`} alt="movie-poster" />
                  <h4>{data.movie}</h4>
                  <h5>{data.directorName}</h5>
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