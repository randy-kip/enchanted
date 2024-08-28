// src/components/SpotlightPage.jsx
// import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/SpotlightPage.css';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';

const SpotlightPage = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      showSlider('next');
    }, 7000); // Slide every 7 seconds

    return () => clearInterval(autoSlide);
  }, []);

  const showSlider = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="carousel">
      <div className="list">
        {images.map((image, index) => (
          <div className={`item ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat,
                itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut
                doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {images.map((image, index) => (
          <div className={`item ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img src={image} alt={`Thumbnail ${index + 1}`} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={() => showSlider('prev')}>
          &lt;
        </button>
        <button id="next" onClick={() => showSlider('next')}>
          &gt;
        </button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default SpotlightPage;
