// import '..src/pages/Home.css';


import AboutUs from '../components/Home/AboutUs'
import Landing from '../components/Home/Landing'
import Premirering from '../components/Home/Premirering '
// import Slideshow from '../components/Home/Slideshow'


function Home() {
  
  return (
    <div>
        <Landing />
        {/* <Slideshow /> */}
      
        {/* {
          PremireringData.map((movie) => (
            <Premirering key={movie.id} title={movie.title} subtitle={movie.subtitle} url={movie.url}/>
          ))  
        } */}
       
        <Premirering />
        <br /><br />
        <Premirering />
        <br />
        <br />
        <br />
        <AboutUs />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}


export default Home