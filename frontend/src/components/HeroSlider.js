import React, { useState, useEffect } from 'react';
import styles from '../styles/HeroSlider.module.css';
import iotImage from '../assets/iot.png';
import ryuImage from '../assets/ryu.png';

const slides = [
  {
    title: 'Simplify IoT Management',
    subtitle: 'Centralized control and real-time insights for your IoT devices.',
    image: iotImage,
    buttonText: 'Explore Dashboard',
    buttonLink: '/dashboard',
  },
  {
    title: 'What is SDN Controller?',
    subtitle: 'The brain of modern networking.',
    image: ryuImage,
    buttonText: 'Learn More',
    buttonLink: '/about',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.heroSlider}>
      <div className={styles.slide}>
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className={styles.slideImage} />
        <div className={styles.slideContent}>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <a href={slides[currentSlide].buttonLink} className={styles.ctaButton}>
            {slides[currentSlide].buttonText}
          </a>
        </div>
      </div>
      <div className={styles.sliderControls}>
        <button onClick={handlePrev} className={styles.sliderButton}>
          ‹
        </button>
        <button onClick={handleNext} className={styles.sliderButton}>
          ›
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;