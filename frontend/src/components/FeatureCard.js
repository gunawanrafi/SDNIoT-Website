import React from 'react';
import styles from '../styles/FeatureCard.module.css';

const FeatureCard = ({ feature }) => {
  const { icon, title, desc } = feature;

  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{desc}</p>
    </div>
  );
};

export default FeatureCard;