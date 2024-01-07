import { useEffect, useState } from 'react';
import './Home.css'; 
import axios from 'axios';
import PremireringData from "/src/components/Home/Premiering.json"

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
          <a href="/description">
          <div className="premiering-movies" >
            {PremireringData.map((data) => (
              <form action="" key={data.id} >
                <div className="movie">
                
                  <img src={data.url} alt="movie-poster" />
                  <h4>{data.title}</h4>
                  <h5>{data.subtitle}</h5>
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