import React from 'react';
import styles from '../styles/TestimonialCard.module.css';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, feedback, image } = testimonial;

  return (
    <div className={styles.testimonialCard}>
      <img src={image} alt={name} className={styles.testimonialImage} />
      <h3 className={styles.testimonialName}>{name}</h3>
      <p className={styles.testimonialRole}>{role}</p>
      <blockquote className={styles.testimonialFeedback}>“{feedback}”</blockquote>
    </div>
  );
};

export default TestimonialCard;