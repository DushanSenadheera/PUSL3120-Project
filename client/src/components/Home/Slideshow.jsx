import './Slideshow.css'; 
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SlideshowData from './Slideshow.json';

const Slideshow = () => {
    // const images = [
    //   "../src/assets/theater-banner.png",
    //   "../src/assets/Paper-vs-Digital-Movie-Posters-Featured.jpg",
    //   "../src/assets/noovie-natiional-cinemedia.webp"
    // ];

    return (
        <Slide >
            {
              SlideshowData.map((slide) => (
                <div className="each-slide-effect" key={slide.key}>
                    <div style={{'backgroundImage': `url(${slide.image})`}}>
                        {/* <span>{slide.key}</span> */}
                    </div>
                </div>
              ))
            }
        </Slide>
    );
};

export default Slideshow;