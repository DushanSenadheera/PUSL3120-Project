import { useState } from 'react';

const Slideshow = () => {


  return (
    <main>
        <div className="slideshow-container">
      <div className={`mySlides1 ${currentSlide === 0 ? 'active' : ''}`}>
        <img src="../src/assets/theater-banner.png" style={{ width: '100%' }} alt="Theater Banner" />
      </div>

      <div className={`mySlides1 ${currentSlide === 1 ? 'active' : ''}`}>
        <img src="../src/assets/Paper-vs-Digital-Movie-Posters-Featured.jpg" style={{ width: '100%' }} alt="Digital Movie Posters" />
      </div>

      <div className={`mySlides1 ${currentSlide === 2 ? 'active' : ''}`}>
        <img src="../src/assets/noovie-natiional-cinemedia.webp" style={{ width: '100%' }} alt="Noovie National Cinemedia" />
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
    </main>
  );
};
<script src="./bannerSlider.js"></script>

export default Slideshow;
