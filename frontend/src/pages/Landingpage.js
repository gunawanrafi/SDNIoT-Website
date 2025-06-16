import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import HeroSlider from '../components/HeroSlider';
import styles from '../styles/Landingpage.module.css';

// Data Fitur
const features = [
  { icon: '🌐', title: 'Real-Time Monitoring', desc: 'Monitor IoT devices in real-time with detailed analytics.' },
  { icon: '🔔', title: 'Alerts & Notifications', desc: 'Get instant alerts for critical events and anomalies.' },
  { icon: '📊', title: 'Performance Metrics', desc: 'Track key performance indicators and network health.' },
];

// Data Testimoni
const testimonials = [
  {
    name: 'John Doe',
    role: 'IoT Specialist',
    feedback: 'SDN-IoT Dashboard has revolutionized the way we manage our devices. Highly recommended!',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Jane Smith',
    role: 'Network Engineer',
    feedback: 'The real-time monitoring and alerts are game-changers for our operations.',
    image: 'https://via.placeholder.com/100',
  },
];

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className={styles.landingPage}>
      {/* Header */}
      <header className={styles.landingHeader}>
        <div className={styles.logo}>
          <span className={styles.logoHighlight}>SDN</span> IoT
        </div>
        <button className={styles.darkModeBtn} onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Get Started?</h2>
        <p>Join our platform and unlock the full potential of your IoT network.</p>
        <Link to="/contact" className={styles.ctaButton}>
          Get in Touch →
        </Link>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 SDN-IoT Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;